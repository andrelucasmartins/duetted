const API_URL = 'http://localhost:8000/api/categories';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const categoryService = {
  create: async (data: any) => {
    try {
      const response = await fetch(`${API_URL}?${new URLSearchParams(data).toString()}`, {
        method: 'POST',
        headers
      });
      return response.json();
    } catch (error) {
      console.error('Error creating category:', error);
      throw error;
    }
  },

  getAll: async () => {
    const response = await fetch(API_URL, {
      headers,
    });
    return response.json();
  },

  getById: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
      headers,
    });
    return response.json();
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
