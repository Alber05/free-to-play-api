import { FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const categories = [
  {
    category: "MMORPG",
    url: "mmorpg",
  },
  {
    category: "Shooter",
    url: "shooter",
  },
  {
    category: "MOBA",
    url: "moba",
  },
  {
    category: "Anime",
    url: "anime",
  },
  {
    category: "Battle Royale",
    url: "battle-royale",
  },
  {
    category: "Strategy",
    url: "strategy",
  },
  {
    category: "Fantasy",
    url: "fantasy",
  },
  {
    category: "Sci-Fi",
    url: "sci-fi",
  },
  {
    category: "Card Games",
    url: "card",
  },
  {
    category: "Racing",
    url: "racing",
  },
  {
    category: "Fighting",
    url: "fighting",
  },
  {
    category: "Social",
    url: "social",
  },
  {
    category: "Sports",
    url: "sports",
  },
];

function FiltersForm() {
  return (
    <Form>
      <FormGroup className="bg-dark shadow-sm rounded-lg mb-4 p-2 d-flex flex-column align-items-start">
        <h2>Platform</h2>
        <hr className="divider-small" />
        <Form.Check type="checkbox" id="pc" label="PC" />
        <Form.Check type="checkbox" id="browser" label="Browser" />
      </FormGroup>
      <FormGroup className="bg-dark shadow-sm rounded-lg mb-4 p-2 d-flex flex-column align-items-start">
        <h2>Genre</h2>
        {categories.map((tag) => (
          <Form.Check type="checkbox" id={tag.category} label={tag.category} />
        ))}
      </FormGroup>
    </Form>
  );
}

export default FiltersForm;
