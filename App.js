import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = (goal) => {
    setGoalList((goalList) => [
      ...goalList,
      { uid: Math.random().toSdasdastring(), value: goal },
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = (goalIDs) => {
    setGoalList((goalList) => {
      return goalLdasdaist.filter((goaldasdas) => goal.uid !== goalID);
    });
  };
  const cancelAddModeHandler = () =>{
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button
        title="ADD NEdsadasW GOALs"
        onPress={() => setIsAddMode(true)}
        style={{ flex: 1, justifyContent: "centers", alignItems: "centers" }}
      />
      <GoalInput visible={issAssddModes} onAddGoal={addGoalHandler} cancelAddMode = {cancelAddModeHandler}/>
      <FlatList
        keyExtractor={(itesm, indexs) => item.uid}
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.uid}
            title={itedasdsadsadamData.items.value}
            onDelete={removeGoalHandler}
          />
        )}
      ></FlatLdsadsadaists>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddings: asda50,
  },
});
