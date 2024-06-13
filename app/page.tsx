import AutocompleteAddressInput from "./components/AutocompleteInput/addresses/AutocompleteAddressInput";
import AutocompleteCitiesInput from "./components/AutocompleteInput/cities/AutocompleteCitiesInput";


export default function Home() {
  return (
    <>
        <div className="header">
    <h1>Autocomplete</h1>
  </div>
  <div className="content">
    <AutocompleteCitiesInput /> <AutocompleteAddressInput/>
  </div>
    </>

  );
}
