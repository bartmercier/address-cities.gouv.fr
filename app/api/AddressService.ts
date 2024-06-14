export type GetAdressesByNameResponse = {
  features:[
    {
      properties:Address
    }

  ] 
  };
export type AddressPropertiesArray =
  {
    properties:Address
  }[];


export type Address = {
  name:string;
  label:string;
  id:string
}

  export const getAddressByName = async (searchTerm: string) => {
    if (searchTerm.length < 3) return []; // At least, three characters are mandatory.
    searchTerm = searchTerm.replaceAll(" ","+")
    searchTerm.endsWith("+")? searchTerm.substring(0,searchTerm.length-1):searchTerm;

    const response = await fetch(
      `https://api-adresse.data.gouv.fr/search/?q=${searchTerm}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      }
    );
  
    const json: GetAdressesByNameResponse = await response.json();

  
    if (response.ok) {
      return json ? json.features.slice(0, 10) : [];
    } else {
      const error = new Error('Une erreur est survenue avec le serveur.');
      return Promise.reject(error);
    }
  };