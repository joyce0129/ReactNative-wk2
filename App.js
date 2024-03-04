import React from "react";
import { SafeAreaView,StatusBar } from "react-native";
import Header from "./components/Header";
import AlbumList from "./components/Albumlist";


const App=()=>{
  return(
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};

export default App;