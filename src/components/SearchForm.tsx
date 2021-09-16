import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";


export default function SearchForm(){
  const [query, setQuery] = useState<string>("");

    return (
        <Form onSubmit={(event)=>{
          event.preventDefault();

        }}>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          {/* //LABEL// */}
          <Form.Label>Search</Form.Label>
          {/* //INPUT// */}
          <Form.Control type="text" placeholder="Search Recipes" onChange={(event) => {
            setQuery(event.target.value);}} value={query}/>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* RADIO DIAL */}
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      )
}