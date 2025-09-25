import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TaskItem = ({ task, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.text}</Text>
      <TouchableOpacity onPress={onDelete}>
        <AntDesign name="close" size={24} color="#e72300ff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#d6d6d6ff',
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskItem;