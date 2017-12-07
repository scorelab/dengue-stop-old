User guideline to setting up development environment in macOS

Setup react native environment 
------------------------------

We are going to setup android development environment to run the react native application.

1. Setup Homebrew to install packages in Mac. 

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install JDK 

```
brew cask install java
```
you can verify the java version by running

```
brew cask info java
```

3. Install Android Studio

Install Android studio from the following [Link](https://developer.android.com/studio/index.html)

Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:
* Android SDK
* Android SDK Platform
* Performance (Intel ® HAXM)
* Android Virtual Device

Then, click "Next" to install all of these components.

4. Configure the ANDROID_HOME environment variable

Add the following lines to your $HOME/.bash_profile config file:

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

5. Configure Emulator to run from command

 - Accept the SDK licenses. 

   ```
   cd /Library/Android/sdk/tools/bin
    ./sdkmanager --licenses

   ```
   Accept the license by entering 'y'

 - Start Emulator

   ```
   cd ~/Library/Android/sdk/tools/
   check available emulator, you should see your emulator name: ./emulator -list-avds
   run your emulator ./emulator -avd [YOUR_EMULATOR_NAME]

   ```

6. Go to a new terminal and clone your forked repository

7. Run this command in side the project folder to 

   ```
   brew install node
   npm install
   npm install -g react-native-cli

   ```
8. Run the react native android project by following command

   ```
   react-native run-android
   ```
Wait for a few minutes and the app should start on your device (android phone or emulator)

