**STEPS TO BUILD AND RUN APP**

- Open a Terminal on directory where you cloned the app
- Install node modules dependencies with the command: yarn install.
- After the last steps run the command to start a server: yarn start


**RUN ON ANDROID:**
- Open a new terminal, go to directory app path and run the command: npx react-native run-android

**BUILD APK FOR ANDROID:**
- Open a new terminal and runs the commands:

mkdir -r android/app/src/main/assets

curl "http://localhost:8081/index.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"

npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android && ./gradlew clean assembleDebug

**APK FOR ANDROID IN THE FOLLOWING DIRECTORY**
dist/pp-banqi.apk

**SCREENSHOTS**
![Image 1](https://www.linkpicture.com/q/Screenshot_20210204-001059_banqi.jpg)

![Image 2](https://www.linkpicture.com/q/Screenshot_20210204-001106_banqi.jpg)

![Image 3](https://www.linkpicture.com/q/Screenshot_20210204-001113_banqi.jpg)