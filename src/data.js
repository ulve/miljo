export default {
  miljöer: [
    {
      miljö: "PSIT",
      servrar: [
        {
          server: "nb11420",
          dns: "nb11420.rsvb.se",
          typ: ["windows", "applikationsserver"],
          länkar: [
            {
              frontend: "http://nb11420.rsvb.se/SaraFrontend"
            },
            {
              jenkins: "http://nb11420.rsvb.se:8080/",
              kommentar: "Finns bara för deployment"
            },
            {
              testsida: "http://nb11420.rsvb.se/SaraTestpage"
            }
          ],
          services: [
            {
              PersonUppdatering: "Körs på båda servrarna"
            },
            "IntressentUppdatering",
            "EkoUppdatering",
            "GeoUppdatering",
            "ArkiveringService",
            "AD-sync",
            "MailImporter",
            "SHS",
            "Bakgrundsjobb"
          ],
          "schemalagda jobb": ["Rapportgenerator", "Bevakningstjänst"]
        },
        {
          server: "nb11421",
          dns: "nb11421.rsvb.se",
          typ: ["windows", "applikationsserver"],
          länkar: [
            {
              frontend: "http://nb11421.rsvb.se/SaraFrontend"
            },
            {
              jenkins: "http://nb11421.rsvb.se:8080/",
              kommentar: "Finns bara för deployment"
            },
            {
              testsida: "http://nb11421.rsvb.se/SaraTestpage"
            }
          ],
          services: [
            {
              PersonUppdatering: "Körs på båda servrarna"
            },
            "IntressentUppdatering",
            "EkoUppdatering",
            "GeoUppdatering",
            "ArkiveringService"
          ]
        }
      ],
      settings: [
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        }
      ]
    },
    {
      miljö: "KSIT",
      servrar: [
        {
          server: "nb11420",
          dns: "nb11420.rsvb.se",
          typ: ["windows", "applikationsserver"],
          länkar: [
            {
              frontend: "http://nb11420.rsvb.se/SaraFrontend"
            },
            {
              jenkins: "http://nb11420.rsvb.se:8080/",
              kommentar: "Finns bara för deployment"
            },
            {
              testsida: "http://nb11420.rsvb.se/SaraTestpage"
            }
          ],
          services: [
            {
              PersonUppdatering: "Körs på båda servrarna"
            },
            "IntressentUppdatering",
            "EkoUppdatering",
            "GeoUppdatering",
            "ArkiveringService",
            "AD-sync",
            "MailImporter",
            "SHS",
            "Bakgrundsjobb"
          ],
          "schemalagda jobb": [
            "Rapportgenerator",
            {
              Bevakningstjänst: null,
              schema: [
                14400,
                {
                  "21600": "Övberlämning till domstol"
                },
                {
                  "28800": "Färdigställ utslag"
                }
              ]
            }
          ]
        },
        {
          server: "nb11421",
          dns: "nb11421.rsvb.se",
          typ: ["windows", "applikationsserver"],
          länkar: [
            {
              frontend: "http://nb11421.rsvb.se/SaraFrontend"
            },
            {
              jenkins: "http://nb11421.rsvb.se:8080/",
              kommentar: "Finns bara för deployment"
            },
            {
              testsida: "http://nb11421.rsvb.se/SaraTestpage"
            }
          ],
          services: [
            {
              PersonUppdatering: "Körs på båda servrarna"
            },
            "IntressentUppdatering",
            "EkoUppdatering",
            "GeoUppdatering",
            "ArkiveringService"
          ]
        }
      ],
      settings: [
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        },
        {
          Verkställighetskö: "asd.asd-asd-asd.asd"
        }
      ]
    }
  ]
};
