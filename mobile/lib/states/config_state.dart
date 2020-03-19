import 'package:dengustop/data/repository.dart';
import 'package:flutter/material.dart';

class ConfigState extends ChangeNotifier {
  final Repository _repository = Repository();

  bool _darkTheme = false;
  bool get darkTheme => _darkTheme;

  ConfigState() {
    _repository.getDarkTheme().then((mode) {
      _darkTheme = mode ?? false;
      notifyListeners();
    });
  }

  Future<void> toggleDarkTheme() {
    return _repository.setDarkTheme(!_darkTheme).then((_) {
      _darkTheme = !_darkTheme;
      notifyListeners();
    });
  }
}