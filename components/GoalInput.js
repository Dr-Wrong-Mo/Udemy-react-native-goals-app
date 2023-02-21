import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';
import FadeInView from './FadeIn';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [hiddenToast, setHiddenToast] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText !== '') {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    } else {
      setHiddenToast(true);
      setTimeout(() => {
        setHiddenToast(false);
      }, 3500);
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      {hiddenToast && (
        <FadeInView style={{ ...styles.toast, ...styles.toastText }}>
          <View>
            <TextInput style={styles.toastText}>
              Please add goal text or cancel
            </TextInput>
          </View>
        </FadeInView>
      )}
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
    marginTop: 16,
  },
  toast: {
    position: 'absolute',
    top: 60,
    right: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    zIndex: 2,
  },
  toastText: {
    color: 'red',
  },
});
