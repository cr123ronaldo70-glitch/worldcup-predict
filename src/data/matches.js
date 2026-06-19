// All kickoff times in Nepal Standard Time (NST = UTC+5:45)
// ET to NST: add 9h45m
// Source: worldcuppass.com/schedule + FIFA official

export const MATCHES = [
  // ===================== GROUP STAGE - MATCHDAY 1 =====================
  { id:"m01", group:"Group A", home:"Mexico",          away:"South Africa",        homeFlag:"🇲🇽", awayFlag:"🇿🇦", kickoff:"2026-06-12T00:45:00+05:45", venue:"Estadio Azteca, Mexico City",          result:"home" },
  { id:"m02", group:"Group A", home:"South Korea",     away:"Czechia",             homeFlag:"🇰🇷", awayFlag:"🇨🇿", kickoff:"2026-06-12T07:45:00+05:45", venue:"Estadio Akron, Guadalajara",           result:"home" },
  { id:"m03", group:"Group B", home:"Canada",          away:"Bosnia & Herzegovina",homeFlag:"🇨🇦", awayFlag:"🇧🇦", kickoff:"2026-06-13T00:45:00+05:45", venue:"BMO Field, Toronto",                   result:"draw" },
  { id:"m04", group:"Group D", home:"USA",             away:"Paraguay",            homeFlag:"🇺🇸", awayFlag:"🇵🇾", kickoff:"2026-06-13T06:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:"home" },
  { id:"m05", group:"Group B", home:"Qatar",           away:"Switzerland",         homeFlag:"🇶🇦", awayFlag:"🇨🇭", kickoff:"2026-06-14T00:45:00+05:45", venue:"Levi's Stadium, San Francisco",        result:"draw" },
  { id:"m06", group:"Group C", home:"Brazil",          away:"Morocco",             homeFlag:"🇧🇷", awayFlag:"🇲🇦", kickoff:"2026-06-14T03:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:"draw" },
  { id:"m07", group:"Group C", home:"Haiti",           away:"Scotland",            homeFlag:"🇭🇹", awayFlag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", kickoff:"2026-06-14T06:45:00+05:45", venue:"Gillette Stadium, Boston",             result:"away" },
  { id:"m08", group:"Group D", home:"Australia",       away:"Türkiye",             homeFlag:"🇦🇺", awayFlag:"🇹🇷", kickoff:"2026-06-14T09:45:00+05:45", venue:"BC Place, Vancouver",                  result:"home" },
  { id:"m09", group:"Group E", home:"Germany",         away:"Curaçao",             homeFlag:"🇩🇪", awayFlag:"🇨🇼", kickoff:"2026-06-14T22:45:00+05:45", venue:"NRG Stadium, Houston",                 result:"home" },
  { id:"m10", group:"Group F", home:"Netherlands",     away:"Japan",               homeFlag:"🇳🇱", awayFlag:"🇯🇵", kickoff:"2026-06-15T01:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:"draw" },
  { id:"m11", group:"Group E", home:"Ivory Coast",     away:"Ecuador",             homeFlag:"🇨🇮", awayFlag:"🇪🇨", kickoff:"2026-06-15T04:45:00+05:45", venue:"Lincoln Financial, Philadelphia",      result:"home" },
  { id:"m12", group:"Group F", home:"Sweden",          away:"Tunisia",             homeFlag:"🇸🇪", awayFlag:"🇹🇳", kickoff:"2026-06-15T07:45:00+05:45", venue:"Estadio BBVA, Monterrey",              result:"home" },
  { id:"m13", group:"Group H", home:"Spain",           away:"Cabo Verde",          homeFlag:"🇪🇸", awayFlag:"🇨🇻", kickoff:"2026-06-15T21:45:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:"draw" },
  { id:"m14", group:"Group G", home:"Belgium",         away:"Egypt",               homeFlag:"🇧🇪", awayFlag:"🇪🇬", kickoff:"2026-06-16T00:45:00+05:45", venue:"Lumen Field, Seattle",                 result:"draw" },
  { id:"m15", group:"Group H", home:"Saudi Arabia",    away:"Uruguay",             homeFlag:"🇸🇦", awayFlag:"🇺🇾", kickoff:"2026-06-16T03:45:00+05:45", venue:"Hard Rock Stadium, Miami",             result:"draw" },
  { id:"m16", group:"Group G", home:"Iran",            away:"New Zealand",         homeFlag:"🇮🇷", awayFlag:"🇳🇿", kickoff:"2026-06-16T06:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:"draw" },
  { id:"m17", group:"Group I", home:"France",          away:"Senegal",             homeFlag:"🇫🇷", awayFlag:"🇸🇳", kickoff:"2026-06-17T00:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:"home" },
  { id:"m18", group:"Group I", home:"Iraq",            away:"Norway",              homeFlag:"🇮🇶", awayFlag:"🇳🇴", kickoff:"2026-06-17T03:45:00+05:45", venue:"Gillette Stadium, Boston",             result:"away" },
  { id:"m19", group:"Group J", home:"Argentina",       away:"Algeria",             homeFlag:"🇦🇷", awayFlag:"🇩🇿", kickoff:"2026-06-17T06:45:00+05:45", venue:"Arrowhead Stadium, Kansas City",       result:null },
  { id:"m20", group:"Group J", home:"Austria",         away:"Jordan",              homeFlag:"🇦🇹", awayFlag:"🇯🇴", kickoff:"2026-06-17T09:45:00+05:45", venue:"Levi's Stadium, San Francisco",        result:null },
  { id:"m21", group:"Group K", home:"Portugal",        away:"DR Congo",            homeFlag:"🇵🇹", awayFlag:"🇨🇩", kickoff:"2026-06-17T22:45:00+05:45", venue:"NRG Stadium, Houston",                 result:null },
  { id:"m22", group:"Group L", home:"England",         away:"Croatia",             homeFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag:"🇭🇷", kickoff:"2026-06-18T01:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },
  { id:"m23", group:"Group L", home:"Ghana",           away:"Panama",              homeFlag:"🇬🇭", awayFlag:"🇵🇦", kickoff:"2026-06-18T04:45:00+05:45", venue:"BMO Field, Toronto",                   result:null },
  { id:"m24", group:"Group K", home:"Uzbekistan",      away:"Colombia",            homeFlag:"🇺🇿", awayFlag:"🇨🇴", kickoff:"2026-06-18T07:45:00+05:45", venue:"Estadio Azteca, Mexico City",          result:null },

  // ===================== GROUP STAGE - MATCHDAY 2 =====================
  { id:"m25", group:"Group A", home:"Czechia",         away:"South Africa",        homeFlag:"🇨🇿", awayFlag:"🇿🇦", kickoff:"2026-06-18T21:45:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:null },
  { id:"m26", group:"Group B", home:"Switzerland",     away:"Bosnia & Herzegovina",homeFlag:"🇨🇭", awayFlag:"🇧🇦", kickoff:"2026-06-19T00:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:null },
  { id:"m27", group:"Group B", home:"Canada",          away:"Qatar",               homeFlag:"🇨🇦", awayFlag:"🇶🇦", kickoff:"2026-06-19T03:45:00+05:45", venue:"BC Place, Vancouver",                  result:null },
  { id:"m28", group:"Group A", home:"Mexico",          away:"South Korea",         homeFlag:"🇲🇽", awayFlag:"🇰🇷", kickoff:"2026-06-19T06:45:00+05:45", venue:"Estadio Akron, Guadalajara",           result:null },
  { id:"m29", group:"Group D", home:"Türkiye",         away:"Paraguay",            homeFlag:"🇹🇷", awayFlag:"🇵🇾", kickoff:"2026-06-19T09:45:00+05:45", venue:"Levi's Stadium, San Francisco",        result:null },
  { id:"m30", group:"Group D", home:"USA",             away:"Australia",           homeFlag:"🇺🇸", awayFlag:"🇦🇺", kickoff:"2026-06-20T00:45:00+05:45", venue:"Lumen Field, Seattle",                 result:null },
  { id:"m31", group:"Group C", home:"Scotland",        away:"Morocco",             homeFlag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", awayFlag:"🇲🇦", kickoff:"2026-06-20T03:45:00+05:45", venue:"Gillette Stadium, Boston",             result:null },
  { id:"m32", group:"Group C", home:"Brazil",          away:"Haiti",               homeFlag:"🇧🇷", awayFlag:"🇭🇹", kickoff:"2026-06-20T05:15:00+05:45", venue:"Lincoln Financial, Philadelphia",      result:null },
  { id:"m33", group:"Group F", home:"Netherlands",     away:"Sweden",              homeFlag:"🇳🇱", awayFlag:"🇸🇪", kickoff:"2026-06-20T22:45:00+05:45", venue:"NRG Stadium, Houston",                 result:null },
  { id:"m34", group:"Group E", home:"Germany",         away:"Ivory Coast",         homeFlag:"🇩🇪", awayFlag:"🇨🇮", kickoff:"2026-06-21T01:45:00+05:45", venue:"BMO Field, Toronto",                   result:null },
  { id:"m35", group:"Group E", home:"Ecuador",         away:"Curaçao",             homeFlag:"🇪🇨", awayFlag:"🇨🇼", kickoff:"2026-06-21T05:45:00+05:45", venue:"Arrowhead Stadium, Kansas City",       result:null },
  { id:"m36", group:"Group F", home:"Tunisia",         away:"Japan",               homeFlag:"🇹🇳", awayFlag:"🇯🇵", kickoff:"2026-06-21T09:45:00+05:45", venue:"Estadio BBVA, Monterrey",              result:null },
  { id:"m37", group:"Group H", home:"Spain",           away:"Saudi Arabia",        homeFlag:"🇪🇸", awayFlag:"🇸🇦", kickoff:"2026-06-21T21:45:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:null },
  { id:"m38", group:"Group G", home:"Belgium",         away:"Iran",                homeFlag:"🇧🇪", awayFlag:"🇮🇷", kickoff:"2026-06-22T00:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:null },
  { id:"m39", group:"Group H", home:"Uruguay",         away:"Cabo Verde",          homeFlag:"🇺🇾", awayFlag:"🇨🇻", kickoff:"2026-06-22T03:45:00+05:45", venue:"Hard Rock Stadium, Miami",             result:null },
  { id:"m40", group:"Group G", home:"New Zealand",     away:"Egypt",               homeFlag:"🇳🇿", awayFlag:"🇪🇬", kickoff:"2026-06-22T06:45:00+05:45", venue:"BC Place, Vancouver",                  result:null },
  { id:"m41", group:"Group J", home:"Argentina",       away:"Austria",             homeFlag:"🇦🇷", awayFlag:"🇦🇹", kickoff:"2026-06-22T22:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },
  { id:"m42", group:"Group I", home:"France",          away:"Iraq",                homeFlag:"🇫🇷", awayFlag:"🇮🇶", kickoff:"2026-06-23T02:45:00+05:45", venue:"Lincoln Financial, Philadelphia",      result:null },
  { id:"m43", group:"Group I", home:"Norway",          away:"Senegal",             homeFlag:"🇳🇴", awayFlag:"🇸🇳", kickoff:"2026-06-23T05:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:null },
  { id:"m44", group:"Group J", home:"Jordan",          away:"Algeria",             homeFlag:"🇯🇴", awayFlag:"🇩🇿", kickoff:"2026-06-23T08:45:00+05:45", venue:"Levi's Stadium, San Francisco",        result:null },
  { id:"m45", group:"Group K", home:"Portugal",        away:"Uzbekistan",          homeFlag:"🇵🇹", awayFlag:"🇺🇿", kickoff:"2026-06-23T22:45:00+05:45", venue:"NRG Stadium, Houston",                 result:null },
  { id:"m46", group:"Group L", home:"England",         away:"Ghana",               homeFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag:"🇬🇭", kickoff:"2026-06-24T01:45:00+05:45", venue:"Gillette Stadium, Boston",             result:null },
  { id:"m47", group:"Group L", home:"Panama",          away:"Croatia",             homeFlag:"🇵🇦", awayFlag:"🇭🇷", kickoff:"2026-06-24T04:45:00+05:45", venue:"BMO Field, Toronto",                   result:null },
  { id:"m48", group:"Group K", home:"Colombia",        away:"DR Congo",            homeFlag:"🇨🇴", awayFlag:"🇨🇩", kickoff:"2026-06-24T07:45:00+05:45", venue:"Estadio Akron, Guadalajara",           result:null },

  // ===================== GROUP STAGE - MATCHDAY 3 =====================
  { id:"m49", group:"Group B", home:"Switzerland",     away:"Canada",              homeFlag:"🇨🇭", awayFlag:"🇨🇦", kickoff:"2026-06-25T00:45:00+05:45", venue:"BC Place, Vancouver",                  result:null },
  { id:"m50", group:"Group B", home:"Bosnia & Herzegovina", away:"Qatar",          homeFlag:"🇧🇦", awayFlag:"🇶🇦", kickoff:"2026-06-25T00:45:00+05:45", venue:"Lumen Field, Seattle",                 result:null },
  { id:"m51", group:"Group C", home:"Scotland",        away:"Brazil",              homeFlag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", awayFlag:"🇧🇷", kickoff:"2026-06-25T03:45:00+05:45", venue:"Hard Rock Stadium, Miami",             result:null },
  { id:"m52", group:"Group C", home:"Morocco",         away:"Haiti",               homeFlag:"🇲🇦", awayFlag:"🇭🇹", kickoff:"2026-06-25T03:45:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:null },
  { id:"m53", group:"Group A", home:"Czechia",         away:"Mexico",              homeFlag:"🇨🇿", awayFlag:"🇲🇽", kickoff:"2026-06-25T06:45:00+05:45", venue:"Estadio Azteca, Mexico City",          result:null },
  { id:"m54", group:"Group A", home:"South Africa",    away:"South Korea",         homeFlag:"🇿🇦", awayFlag:"🇰🇷", kickoff:"2026-06-25T06:45:00+05:45", venue:"Estadio BBVA, Monterrey",              result:null },
  { id:"m55", group:"Group E", home:"Curaçao",         away:"Ivory Coast",         homeFlag:"🇨🇼", awayFlag:"🇨🇮", kickoff:"2026-06-26T01:45:00+05:45", venue:"Lincoln Financial, Philadelphia",      result:null },
  { id:"m56", group:"Group E", home:"Ecuador",         away:"Germany",             homeFlag:"🇪🇨", awayFlag:"🇩🇪", kickoff:"2026-06-26T01:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:null },
  { id:"m57", group:"Group F", home:"Japan",           away:"Sweden",              homeFlag:"🇯🇵", awayFlag:"🇸🇪", kickoff:"2026-06-26T04:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },
  { id:"m58", group:"Group F", home:"Tunisia",         away:"Netherlands",         homeFlag:"🇹🇳", awayFlag:"🇳🇱", kickoff:"2026-06-26T04:45:00+05:45", venue:"Arrowhead Stadium, Kansas City",       result:null },
  { id:"m59", group:"Group D", home:"Türkiye",         away:"USA",                 homeFlag:"🇹🇷", awayFlag:"🇺🇸", kickoff:"2026-06-26T07:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:null },
  { id:"m60", group:"Group D", home:"Paraguay",        away:"Australia",           homeFlag:"🇵🇾", awayFlag:"🇦🇺", kickoff:"2026-06-26T07:45:00+05:45", venue:"Levi's Stadium, San Francisco",        result:null },
  { id:"m61", group:"Group I", home:"Norway",          away:"France",              homeFlag:"🇳🇴", awayFlag:"🇫🇷", kickoff:"2026-06-27T00:45:00+05:45", venue:"Gillette Stadium, Boston",             result:null },
  { id:"m62", group:"Group I", home:"Senegal",         away:"Iraq",                homeFlag:"🇸🇳", awayFlag:"🇮🇶", kickoff:"2026-06-27T00:45:00+05:45", venue:"BMO Field, Toronto",                   result:null },
  { id:"m63", group:"Group H", home:"Cabo Verde",      away:"Saudi Arabia",        homeFlag:"🇨🇻", awayFlag:"🇸🇦", kickoff:"2026-06-27T05:45:00+05:45", venue:"NRG Stadium, Houston",                 result:null },
  { id:"m64", group:"Group H", home:"Uruguay",         away:"Spain",               homeFlag:"🇺🇾", awayFlag:"🇪🇸", kickoff:"2026-06-27T05:45:00+05:45", venue:"Estadio Akron, Guadalajara",           result:null },
  { id:"m65", group:"Group G", home:"Egypt",           away:"Iran",                homeFlag:"🇪🇬", awayFlag:"🇮🇷", kickoff:"2026-06-27T08:45:00+05:45", venue:"Lumen Field, Seattle",                 result:null },
  { id:"m66", group:"Group G", home:"New Zealand",     away:"Belgium",             homeFlag:"🇳🇿", awayFlag:"🇧🇪", kickoff:"2026-06-27T08:45:00+05:45", venue:"BC Place, Vancouver",                  result:null },
  { id:"m67", group:"Group L", home:"Panama",          away:"England",             homeFlag:"🇵🇦", awayFlag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", kickoff:"2026-06-28T02:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:null },
  { id:"m68", group:"Group L", home:"Croatia",         away:"Ghana",               homeFlag:"🇭🇷", awayFlag:"🇬🇭", kickoff:"2026-06-28T02:45:00+05:45", venue:"Lincoln Financial, Philadelphia",      result:null },
  { id:"m69", group:"Group K", home:"Colombia",        away:"Portugal",            homeFlag:"🇨🇴", awayFlag:"🇵🇹", kickoff:"2026-06-28T04:15:00+05:45", venue:"Hard Rock Stadium, Miami",             result:null },
  { id:"m70", group:"Group K", home:"DR Congo",        away:"Uzbekistan",          homeFlag:"🇨🇩", awayFlag:"🇺🇿", kickoff:"2026-06-28T04:15:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:null },
  { id:"m71", group:"Group J", home:"Algeria",         away:"Austria",             homeFlag:"🇩🇿", awayFlag:"🇦🇹", kickoff:"2026-06-28T07:45:00+05:45", venue:"Arrowhead Stadium, Kansas City",       result:null },
  { id:"m72", group:"Group J", home:"Jordan",          away:"Argentina",           homeFlag:"🇯🇴", awayFlag:"🇦🇷", kickoff:"2026-06-28T07:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },

  // ===================== ROUND OF 32 =====================
  { id:"r01", group:"Round of 32", home:"2nd Group A", away:"2nd Group B",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-06-29T00:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:null },
  { id:"r02", group:"Round of 32", home:"1st Group C", away:"2nd Group F",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-06-29T22:45:00+05:45", venue:"NRG Stadium, Houston",                 result:null },
  { id:"r03", group:"Round of 32", home:"1st Group E", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-06-30T02:15:00+05:45", venue:"Gillette Stadium, Boston",             result:null },
  { id:"r04", group:"Round of 32", home:"1st Group F", away:"2nd Group C",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-06-30T06:45:00+05:45", venue:"Estadio BBVA, Monterrey",              result:null },
  { id:"r05", group:"Round of 32", home:"2nd Group E", away:"2nd Group I",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-01T22:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },
  { id:"r06", group:"Round of 32", home:"1st Group I", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-02T02:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:null },
  { id:"r07", group:"Round of 32", home:"1st Group A", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-02T06:45:00+05:45", venue:"Estadio Azteca, Mexico City",          result:null },
  { id:"r08", group:"Round of 32", home:"1st Group L", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-02T21:45:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:null },
  { id:"r09", group:"Round of 32", home:"1st Group G", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-03T01:45:00+05:45", venue:"Lumen Field, Seattle",                 result:null },
  { id:"r10", group:"Round of 32", home:"1st Group D", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-03T05:45:00+05:45", venue:"Levi's Stadium, San Francisco",        result:null },
  { id:"r11", group:"Round of 32", home:"1st Group H", away:"2nd Group J",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-03T00:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:null },
  { id:"r12", group:"Round of 32", home:"2nd Group K", away:"2nd Group L",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-03T04:45:00+05:45", venue:"BMO Field, Toronto",                   result:null },
  { id:"r13", group:"Round of 32", home:"1st Group B", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-04T08:45:00+05:45", venue:"BC Place, Vancouver",                  result:null },
  { id:"r14", group:"Round of 32", home:"2nd Group D", away:"2nd Group G",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-04T23:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },
  { id:"r15", group:"Round of 32", home:"1st Group J", away:"2nd Group H",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-04T03:45:00+05:45", venue:"Hard Rock Stadium, Miami",             result:null },
  { id:"r16", group:"Round of 32", home:"1st Group K", away:"Best 3rd",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-05T07:15:00+05:45", venue:"Arrowhead Stadium, Kansas City",       result:null },

  // ===================== ROUND OF 16 =====================
  { id:"q01", group:"Round of 16", home:"Winner R01", away:"Winner R04",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-05T22:45:00+05:45", venue:"NRG Stadium, Houston",                 result:null },
  { id:"q02", group:"Round of 16", home:"Winner R03", away:"Winner R06",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-06T02:45:00+05:45", venue:"Lincoln Financial, Philadelphia",      result:null },
  { id:"q03", group:"Round of 16", home:"Winner R02", away:"Winner R05",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-06T01:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:null },
  { id:"q04", group:"Round of 16", home:"Winner R07", away:"Winner R08",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-06T05:45:00+05:45", venue:"Estadio Azteca, Mexico City",          result:null },
  { id:"q05", group:"Round of 16", home:"Winner R11", away:"Winner R12",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-07T00:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },
  { id:"q06", group:"Round of 16", home:"Winner R09", away:"Winner R10",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-07T05:45:00+05:45", venue:"Lumen Field, Seattle",                 result:null },
  { id:"q07", group:"Round of 16", home:"Winner R14", away:"Winner R15",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-08T21:45:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:null },
  { id:"q08", group:"Round of 16", home:"Winner R13", away:"Winner R16",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-09T01:45:00+05:45", venue:"BC Place, Vancouver",                  result:null },

  // ===================== QUARTER-FINALS =====================
  { id:"sf1", group:"Quarter-Final", home:"Winner Q01", away:"Winner Q02",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-10T01:45:00+05:45", venue:"Gillette Stadium, Boston",             result:null },
  { id:"sf2", group:"Quarter-Final", home:"Winner Q05", away:"Winner Q06",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-11T00:45:00+05:45", venue:"SoFi Stadium, Los Angeles",            result:null },
  { id:"sf3", group:"Quarter-Final", home:"Winner Q03", away:"Winner Q04",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-12T02:45:00+05:45", venue:"Hard Rock Stadium, Miami",             result:null },
  { id:"sf4", group:"Quarter-Final", home:"Winner Q07", away:"Winner Q08",          homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-12T06:45:00+05:45", venue:"Arrowhead Stadium, Kansas City",       result:null },

  // ===================== SEMI-FINALS =====================
  { id:"sm1", group:"Semi-Final",  home:"Winner SF1", away:"Winner SF2",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-15T00:45:00+05:45", venue:"AT&T Stadium, Dallas",                 result:null },
  { id:"sm2", group:"Semi-Final",  home:"Winner SF3", away:"Winner SF4",            homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-16T00:45:00+05:45", venue:"Mercedes-Benz Stadium, Atlanta",       result:null },

  // ===================== THIRD PLACE =====================
  { id:"tp1", group:"3rd Place",   home:"Loser SF1",  away:"Loser SF2",             homeFlag:"⚽", awayFlag:"⚽", kickoff:"2026-07-19T02:45:00+05:45", venue:"Hard Rock Stadium, Miami",             result:null },

  // ===================== FINAL =====================
  { id:"fin", group:"⭐ FINAL",    home:"Winner SM1", away:"Winner SM2",            homeFlag:"🏆", awayFlag:"🏆", kickoff:"2026-07-20T00:45:00+05:45", venue:"MetLife Stadium, New York/NJ",         result:null },
];

// Pre-seeded real results for completed matches (Matchday 1)
export const COMPLETED_RESULTS = {
  m01: "home",  // Mexico 2-0 South Africa
  m02: "home",  // South Korea 2-1 Czechia
  m03: "draw",  // Canada 1-1 Bosnia & Herzegovina
  m04: "home",  // USA 4-1 Paraguay
  m05: "draw",  // Qatar 1-1 Switzerland
  m06: "draw",  // Brazil 1-1 Morocco
  m07: "away",  // Haiti 0-1 Scotland
  m08: "home",  // Australia 2-0 Türkiye
  m09: "home",  // Germany 7-1 Curaçao
  m10: "draw",  // Netherlands 2-2 Japan
  m11: "home",  // Ivory Coast 1-0 Ecuador
  m12: "home",  // Sweden 5-1 Tunisia
  m13: "draw",  // Spain 0-0 Cabo Verde
  m14: "draw",  // Belgium 1-1 Egypt
  m15: "draw",  // Saudi Arabia 1-1 Uruguay
  m16: "draw",  // Iran 2-2 New Zealand
  m17: "home",  // France 3-1 Senegal
  m18: "away",  // Iraq 1-4 Norway
};

export function getMatchStatus(match) {
  const now = new Date();
  const kickoff = new Date(match.kickoff);
  const lockTime = new Date(kickoff.getTime() - 15 * 60 * 1000);
  if (now >= kickoff) return "live_or_finished";
  if (now >= lockTime) return "locked";
  return "open";
}
