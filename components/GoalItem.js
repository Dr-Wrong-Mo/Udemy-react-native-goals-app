import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View
      key={props.index}
      style={{
        ...styles.goalItemContainer,
        ...(props.index % 2 != 0 ? styles.goalItemContainerEven : null),
      }}
    >
      <Pressable
        android_ripple={{ color: '#2b0e51' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    marginHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  goalItemContainerEven: {
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    borderRadius: 10,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
