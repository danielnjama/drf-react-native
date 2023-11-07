import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
// import DatePicker from 'react-native-datepicker';
import { Picker } from "@react-native-picker/picker";

export default function DataCollectionScreen() {
  const [selectedGender, setSelectedGender] = useState("");
  const [age,setAge]=useState("");
  const [income,setIncome]=useState();
  const [rent,setRent]=useState();
  const [first_name,setfirst_name]=useState();


  const handleSubmit = () => {
    // Create an object to hold the user data
    const userData = {
      first_name: first_name,
      gender: selectedGender,
      age: age,
      monthly_income: income,
      house_rent: rent,
      own_a_car: 1
    };

    //check if the object userData has complete data:
    // Function to check if all entries have data
function checkAllEntriesHaveData(obj) {
  for (const key in obj) {
    if (!obj[key]) {
      return false; // If any entry is falsy, return false
    }
  }
  return true; // If all entries have data, return true
}

// Check if all entries have data
if (checkAllEntriesHaveData(userData)) {
  fetch('http://172.16.2.198:8000/userinfo/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the server response (if needed)
      alert('Data Added successfully');
      console.log('Server response:', data);
      setSelectedGender();
      setAge();
      setIncome();
      setRent();
      setfirst_name();

    })
    .catch((error) => {
      // Handle any errors
      alert('Error:', error);
    });
} else {
  alert('Fill in all the fields!')
}
    //end 
  
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <View style={styles.HeaderView}>
          <Text style={styles.HeaderText}> Enter your Information </Text>
        </View>
        <View style={[styles.InputView, styles.MoreinputStyle]}>
          <TextInput placeholder="First Name" value={first_name} onChangeText={(text) => setfirst_name(text)} />
        </View>
        <View style={styles.InputView}>
          <Text>Select your gender:</Text>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue) => setSelectedGender(itemValue)}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
        <View style={[styles.InputView, styles.MoreinputStyle]}>
          <TextInput placeholder="Enter age" keyboardType="numeric" value={age} onChangeText={(text) => setAge(text)} />
        </View>
        <View style={[styles.InputView, styles.MoreinputStyle]}>
          <TextInput placeholder="Income" keyboardType="numeric" value={income} onChangeText={(text) => setIncome(text)} />
        </View>
        <View style={[styles.InputView, styles.MoreinputStyle]}>
          <TextInput placeholder="House Rent" keyboardType="numeric" value={rent} onChangeText={(text) => setRent(text)}/>
        </View>
        <TouchableOpacity style={styles.submitInfo} onPress={handleSubmit}>
          <Text> SUBMIT INFO </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  InputView: {
    marginTop: 20,
    // backgroundColor: 'white',
    width: "100%",
  },

  HeaderView: {
    marginTop: 10,
  },
  HeaderText: {
    fontSize: 20,
    textAlign: "center",
  },
  submitInfo: {
    backgroundColor: "brown",
    width: "100%",
    paddingVertical: 10,
    marginTop: 40,
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
  },
  MoreinputStyle: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingLeft: 15,
  },
});
