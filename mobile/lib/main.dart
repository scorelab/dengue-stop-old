import 'package:dengustop/screens/home/home_screen.dart';
import 'package:dengustop/states/config_state.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  Provider.debugCheckInvalidValueType = null;
  WidgetsFlutterBinding.ensureInitialized();

  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider<ConfigState>.value(
          value: ConfigState(),
        ),
      ],
      child: DengueApp(),
    ),
  );
}

class DengueApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    ConfigState configState = Provider.of<ConfigState>(context);
    return MaterialApp(
      title: "Dengue stop app",
      home: HomeScreen(),
      theme: ThemeData(
        brightness: configState.darkTheme ? Brightness.dark : Brightness.light,
      ),
    );
  }
}
