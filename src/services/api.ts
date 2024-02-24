const API_ENDPOINT = 'http://localhost:8080';

export const getValueByKey = async (key: string) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/get/${key}`, {method: 'GET'})
    return await response.json();
  } catch (error) {
    console.error('Error fetching the value:', error);
    throw error;
  }
};

export const setValueByKey = async (
  key: string,
  value: string
) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/set`, {method: 'POST', body: JSON.stringify({
      key, value
    })})
    return await response.json();
  } catch (error) {
    console.error('Error setting the value:', error);
    throw error;
  }
};
