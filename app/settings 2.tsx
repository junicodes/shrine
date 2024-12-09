import { ScrollView } from "react-native"
import { PaperProvider } from "react-native-paper"

const Settings = () => {
    return (
        <PaperProvider>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                Settings 
            </ScrollView>
        </PaperProvider>
    )
}

export default Settings;