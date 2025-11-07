import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(profiles);
const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  function handleLike(id) {
    setPeople(ps =>
      ps.map(p =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    let newErrors = {};
    if (trimmed === '') {
      newErrors.name = 'Name is required.';
     // setErrors('Name is required.');
    }
    const exists = people.some(p => p.name.toLowerCase() === name.trim().toLowerCase());
    if (exists) {
      newErrors.name = 'Name must be unique.';
     // setErrors({ name: 'Name must be unique.' });
    }
    console.log(errors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setValidated(true);
      return;
    }

    const newProfile = {
      id: people.length + 1,
      name: trimmed,
      likes: 0,
    };

    setPeople([...people, newProfile]);
    setName('');
    setErrors({});
    e.target.reset();
    setValidated(false);
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' value={name} type="text" placeholder="name" onChange={(e) => setName(e.currentTarget.value)} isInvalid={!!errors.name} />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>  
      </Form.Group>
      <Button className="my-2" variant="primary" type="submit">
        Add Profile
      </Button>
      </Form>
      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            <ProfileCard
              name={p.name}
              likes={p.likes}
              onLike={() => handleLike(p.id)} // pass handler to each card
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

