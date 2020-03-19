import 'package:shared_preferences/shared_preferences.dart';

class ConfigProvider {
  final String darkTheme = "config-dark-theme";

  Future<void> setDarkTheme(bool mode) => SharedPreferences.getInstance()
      .then((pref) => pref.setBool(darkTheme, mode));

  Future<bool> getDarkTheme() =>
      SharedPreferences.getInstance().then((pref) => pref.get(darkTheme));
}
