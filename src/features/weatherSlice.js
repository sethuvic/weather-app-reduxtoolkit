import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from './weatherAPI';

export const fetchCityWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (cities) => {
      const response = fetchWeather(cities);
      return response.data;
    }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
      cities: [],
      error: '',
      data: [],
      status: false
  },
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
      state.error = '';
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
          console.log(action.payload)
        state.status = false;
        state.data = action.payload;
      })
      .addCase(fetchCityWeather.rejected, (state, action) => {
        state.status = false;
        state.error = 'Failed to fetch data';
      });
  },
});

export const { setCities, setError } = weatherSlice.actions;
export const getWeather = (state) => state.weather;

export const addCities = (city) => (dispatch, getState) => {
  if (city.length <= 3) {
      dispatch(setCities(city))
  } else {
      dispatch(setError('Maximum 3 are allowed'))
  }
};


// export const fetchCityWeather = (cities) => (dispatch, getState) => {
//   if (cities.length > 0) {
//     // dispatch(fetchWeather(cities))
//     fetchWeatherData()
//   } else {
//       dispatch(setError('Please select city.'))
//   }
// };

export default weatherSlice.reducer;
