try {
    const response = await fetch(
      "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?limit=20&refine=keywords_fr%3A%22concert%22&refine=location_countrycode%3A%22FR%22&refine=lastdate_begin%3A%222023%22"
    );
  
    if (!response.ok) {
      throw new Error(`Erreur de réseau - ${response.status}`);
    }
  
    const data = await response.json();
    console.log("data", data);
    // Maintenant, vous pouvez accéder aux résultats
    console.log("results", data.records);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
  