import Select from "./Select"
import { StyledContainer } from "./styles"

const options = [
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
  { value: "pink", label: "Pink" },
  { value: "purple", label: "Purple" },
  { value: "grey", label: "Grey" },
];

const App = () => {

  return (
    <StyledContainer>
      <Select placeholder="Select items..." options={options} multiple searchable onChange={(value) => console.log(value)} />
      <Select placeholder="Select item..." options={options} searchable onChange={(value) => console.log(value)} />
    </StyledContainer>

  )
}

export default App
