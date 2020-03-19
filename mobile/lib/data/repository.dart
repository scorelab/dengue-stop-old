import 'package:dengustop/data/local/providers/config_provider.dart';

class Repository {
  ConfigProvider _configProvider;

  // singleton
  static final Repository _repository = Repository._internal();

  factory Repository() {
    return _repository;
  }

  Future<void> setDarkTheme(bool mode) {
    return _configProvider.setDarkTheme(mode);
  }

  Future<bool> getDarkTheme() {
    return _configProvider.getDarkTheme();
  }

  Repository._internal() : _configProvider = ConfigProvider();
}
