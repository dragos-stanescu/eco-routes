export const fetchTrips = async () => {
  try {
    const response = await fetch("http://localhost:8080/trips");
    if (!response.ok) {
      throw new Error("Network response failed: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};

export const fetchTripById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:8080/trips/${id}`);
    if (!response.ok) {
      throw new Error("Network response failed: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
};
