
const API_URL = 'http://localhost:8000/api/recipes';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const recipeService = {
  create: async (data: any) => {
    const response = await fetch(`${API_URL}?${new URLSearchParams(data).toString()}`, {
      method: 'POST',
      headers
    });
    return response.json();
  },

  getAll: async () => {
    try {
      const response = await fetch(API_URL, {
        headers,
        cache: 'no-store',
      });
      return response.json();
    } catch (error) {
      console.error('Error fetching recipes:', error);
      ;
    }

  },

  getById: async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        headers,
      });
      return response.json();
    } catch (error) {
      console.log(error)
    }
  },

  getGroupById: async (id: string) => {
    const response = await fetch(`${API_URL}/category/${id}`, {
      headers,
    });
    return response.json();
  },

  filterByRecipe: async (search?: string) => {
    try {
      const response = await fetch(`${API_URL}/filter?${search}`, {
        method: 'POST',
        headers,
        cache: 'no-store',
        next: { tags: ['collection-filter'] }
      })


      return response.json()
    } catch (error) {
      console.log(error)
    }

  },


  update: async (id: string, data: any) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers,
    });
    return response.json();
  },
};
