class DataService {
  getUsers = () => {
    return fetch ('https://randomuser.me/api/?results=15')
      .then (response => response.json ())
      .then (data => {
        return data.results;
      });
    //objekat je data,a result je niz. map se poziva nad nizom.
  };
}

export default new DataService ();
