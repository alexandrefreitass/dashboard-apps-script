function efetivo() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var planilha = sheet.getSheetByName('EFETIVO');
  SpreadsheetApp.setActiveSheet(planilha);
}

function inspecao() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var planilha = sheet.getSheetByName('PERÍODO INSPEÇÃO');
  SpreadsheetApp.setActiveSheet(planilha);
}

function restricao() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var planilha = sheet.getSheetByName('RESTRIÇÃO');
  SpreadsheetApp.setActiveSheet(planilha);
}

function eap() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var planilha = sheet.getSheetByName('EAP');
  SpreadsheetApp.setActiveSheet(planilha);
}

function agendamento() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var planilha = sheet.getSheetByName('AGENDAMENTO');
  SpreadsheetApp.setActiveSheet(planilha);
}
