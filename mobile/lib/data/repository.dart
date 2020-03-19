import 'package:dengustop/data/local/providers/config_provider.dart';

class Repository {
  ConfigProvier _configProvier;

  // singleton
  static final Repository _repository = Repository._internal();

  factory Repository() {
    return _repository;
  }

  Repository._internal() : _configProvier = ConfigProvier();
}
