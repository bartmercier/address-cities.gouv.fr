import AutocompleteAddressInput from "./components/AutocompleteInput/addresses/AutocompleteAddressInput";
import AutocompleteCitiesInput from "./components/AutocompleteInput/cities/AutocompleteCitiesInput";


export default function Home() {
  return (
    <>
    <div className="header">
        <div className="content-center">
          <div className="flex flex-col w-3/6 space-y-4">
            <div></div>
            <div><AutocompleteCitiesInput /></div>
            <div><AutocompleteAddressInput /></div>
          </div>
        </div>
    </div>
    </>

  );
}
