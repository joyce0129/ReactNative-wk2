import React from "react";
import { SafeAreaView,StatusBar } from "react-native";
import Header from "./components/Header";
import AlbumList from "./components/Albumlist";
import albumData from "./components/albums.json";


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Header title={albumData.albumTitle} />
      <AlbumList />
    </SafeAreaView>
  );
};

export default App;
