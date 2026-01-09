import 'package:flutter_dotenv/flutter_dotenv.dart';

class EnvConfig {

  static String get apiMyNestBaseUrl {
    final url = dotenv.env['API_MYNEST'];
    if (url == null || url.isEmpty) {
      throw Exception('API_MYNEST não configurada no .env');
    }
    return url;
  }
}
