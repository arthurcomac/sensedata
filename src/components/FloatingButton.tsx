// import React, {useRef} from "react";
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
// import BottomSheet from '@gorhom/bottom-sheet';
// import { Feather } from '@expo/vector-icons';

// const FloatingButton = () => {
//   const bottomSheetRef = useRef<BottomSheet>(null);

//   const handleOpen = () => {
//     bottomSheetRef.current?.expand();
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <TouchableOpacity
//           activeOpacity={0.7}
//           onPress={handleOpen}
//           style={styles.touchableOpacityStyle}>
//             <Text><Feather name="plus-circle" color={"#fff"} size={50} /></Text>        
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>      
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   touchableOpacityStyle: {
//     position: 'absolute',
//     width: 50,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     bottom: 10,
//   },
// });

// export default FloatingButton;
