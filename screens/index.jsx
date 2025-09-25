import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

/** o caminho das pastas 'components' **/ 
import Input from '../components/Input';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      return;
    }
    const newTask = {
      id: Math.random().toString(),
      text: taskText,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTaskText('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <View style={styles.container}>
      <Input
        value={taskText}
        onChangeText={setTaskText}
        onPressButton={handleAddTask}
      />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={() => handleDeleteTask(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;