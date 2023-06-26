import { Text,View } from "react-native";

export default function Footer () {
    return (
        <View style={{
            flex: 0.2,
            backgroundColor:"gray",
        }}>
      <Text style={{
        padding: 10,
        alignItems:'center',
        fontSize:30,
        color:"black",
        fontWeight: 'bold',
      }}>I am Footer</Text>
        </View>
    )
}
