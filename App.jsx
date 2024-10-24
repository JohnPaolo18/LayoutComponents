/**
 * My To Do List App
 * 
 * @format
 */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // Initialize state with array of tasks
  const [tasks, setTasks] = useState([ 
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <SafeAreaView styles={styles.container}>
      {/* Pass tasks using props */}
      <Text style={styles.header}>My To Do List</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'ghostwhite',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default App;

