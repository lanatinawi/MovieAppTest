import React from "react";
import { View, Text } from "react-native";

function ProfilePage() {
    // return (
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Edited x2 : Profile Page: (Will contain user's watched movies & movies interest in watching. Editing )</Text>
    //   </View>
    // );
  }
  import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { fetchTrendingMovies, fetchUpcomingMovies, fetchTopRatedMovies } from './moviedb';
import Loading from './LoadingComponent';
// import TrendingMovies from './TrendingMoviesComponent';
// import MovieList from './MovieListComponent.js';

const ios = Platform.OS === 'ios';

export default function HomeScreen() {
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    console.log('got trending', data.results.length);
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    console.log('got upcoming', data.results.length);
    if (data && data.results) setUpcoming(data.results);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    console.log('got top rated', data.results.length);
    if (data && data.results) setTopRated(data.results);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(34, 34, 34)' }}>
      {/* Search bar */}
      <SafeAreaView style={ios ? { marginBottom: -2 } : { marginBottom: 3 }}>
        <StatusBar style="light" />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16 }}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Movies</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
           <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
          {/* Trending Movies Carousel */}
          {trending.length > 0 && <TrendingMovies data={trending} />}

          {/* Upcoming movies row */}
          {upcoming.length > 0 && <MovieList title="Upcoming" data={upcoming} />}

          {/* Top rated movies row */}
          {topRated.length > 0 && <MovieList title="Top Rated" data={topRated} />}
        </ScrollView>
      )}
    </View>
  );
}
  //export default ProfilePage; 