import { Text,View } from "react-native";

export default function Header () {
    return (
        <View style={{
            flex: 0.2,
            backgroundColor:"gray",
        }}>
      <Text style={{
        padding: 50,
        alignItems:'center',
        fontSize:30,
        color:"black",
        fontWeight: 'bold',
      }}>I am Header</Text>
        </View>
    )
}
