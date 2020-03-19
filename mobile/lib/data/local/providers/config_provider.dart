import 'package:shared_preferences/shared_preferences.dart';

const _DARK_MODE = "dark_mode";

class ConfigProvier {
  Future<void> setDarkMode(bool state) {
    return SharedPreferences.getInstance().then((pref) {
      pref.setBool(_DARK_MODE, state);
    });
  }

  Future<bool> getDarkModeState() {
    return SharedPreferences.getInstance().then((pref) {
      return pref.getBool(_DARK_MODE) ?? false;
    });
  }
}
