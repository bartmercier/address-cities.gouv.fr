'use client'
import React, { useEffect, useMemo, useState } from 'react';
import '/app/components/AutocompleteInput/AutocompleteInput.css';
import {
  AddressPropertiesArray,
  getAddressByName,
} from '@/app/api/AddressService';
import debounce from 'lodash.debounce';



function AutocompleteAddressInput() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResult, setSearchResult] = useState<AddressPropertiesArray>([]);
  const [showResults, setShowResults] = useState(false);

  
  const searchAddreses = async (value: string) =>
  {
    setSearchResult(await getAddressByName(value));
  }

  const debouncedSearchCities = useMemo(() => debounce(searchAddreses, 500), []);

  const onInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowResults(event.target.value !== '');
    setSearchTerm(event.target.value);
    debouncedSearchCities(event.target.value);
  };

  const selectAddress = (name: string) => {
    setShowResults(false);
    setSearchTerm(name );
    setSearchResult([]);
  };

  const results = searchResult?.map((resultItem) => (
    <p key={resultItem.properties.id} onClick={() => selectAddress(resultItem.properties.label)}>
      {resultItem.properties.name} { } {resultItem.properties.label}
    </p>
  ));

  useEffect(() => {
    return () => {
      debouncedSearchCities.cancel();
    };
  }, []);

  return (
    <>
      <div className="input">
        <input type="text" value={searchTerm} onChange={onInputValueChange} />
      </div>
      {showResults && <div className="results">{results}</div>}
    </>
  );
}

export default AutocompleteAddressInput;