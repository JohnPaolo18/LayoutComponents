import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

// Destructure the tasks prop
function ToDoList({ tasks }) {
  return (
    <ScrollView>

      {/*Use map to iterate over the tasks array */}
      {tasks.map((task, index) => (
        <Pressable key={index}>
          
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;



