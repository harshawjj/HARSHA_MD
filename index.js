{
  "name": "HARSHA_MD",
  "description": "A Whatsapp md bot built in NodeJs to make experience better",
  "logo": "https://raw.githubusercontent.com/harshawjj/HARSHA-HELP/refs/heads/main/images%20(3).jpeg",
  "keywords": ["nodejs", "bot", "whatsapp bot", "GARENA", "harshabot", "dark","HARSHAMD","theme bot","multi device","baileys","harsha"],
  "success_url": "/",
  "stack": "container",
"env": {
  "OWNER_NAME": {
  "description": "Name of Bot Owner",
      "value": "HARSHA"
  },
    "AUTO_STATUS_SAVER": {
      "description": "Automatically saves status of every person and sends in log number.",
       "required" :false
      },
	"AUTO_STATUS_READER": {
      "description": "Automatically VIEWS status of every person .",
       "required" :false
      },
    "HEROKU_API_KEY": {
    "description": "Put HEROKU API KEY",
     "required" :false
    },
 "HEROKU_APP_NAME": {
    "description": "This field will be ignored. Heroku will generate a random app name.",
    "required": "true"
},
   "THUMB_IMAGE": {
    "description": "THUMBNAIL for bot.",
     "value": "https://raw.githubusercontent.com/harshawjj/HARSHA-HELP/refs/heads/main/Screenshot_2025-03-07-19-31-17-508_com.android.chrome-edit.jpg"
    },
    "ANTI_BAD_WORD": {
    "description": "Put words here. If you want it enabled in your bot otherwise leave it blank",
     "required" :false
    },
   "ANTILINK_VALUES": {
    "description": "Put words for antilink",
     "value": "chat.whatsapp.com,fb.com,instagram.com",
     "required" :false
    },
     "ANTILINK_ACTION": {
    "description": "Put action for antilink",
     "value": "remove",
     "required" :false
    },
  "LEVEL_UP_MESSAGE": {
    "description": "Fill the value true if you want bot send Level up message in chat.",
     "required" :false,
     "value": "true"
    },
      "READ_MESSAGE": {
    "description": "Fill the value true if you want bot to read all messages.",
     "required" :false,
     "value": "true"
    },
   "DISABLE_PM": {
    "description": "Disable bot in pm",
     "required" :false
    },
      "PREFIX": {
  "description": "Enter your desired prefix for bot.",
      "value": "."
  },
  "OWNER_NUMBER": {
    "description": "The phone numbers of the users who you want to be admin for the bot (should be in international format without + and multiple numbers must be separated by a comma \",\")",
       "value": "94787875679"
  },
   "SESSION_ID": {
    "description": "Please put your SESSION_ID here,if you don't have visit https://replit.com/@Excelottah/BLACK-Md"
  },
    "OPENAI_API_KEY": {
    "description": "Please put your OPENAI api key here.Get it from beta.openai.com ",
       "value": "Replace Me(optional)",
       "required" :false
  },
  "MONGODB_URI": {
    "description": "A secret String for Mongodb Connection.(Required),change for better experience",
    "value": "mongodb://mongo:OnTXwyvDpyRCgvJlMTXKnVekxahZgBth@yamanote.proxy.rlwy.net:19260"
  },
    "THEME": {
    "description": "Put the theme name you want to use. Avilable themes are IZUKU,ZEROTWO,NEZUKO,LUFFY,GOKU and many more..",
     "value": "HARSHA"
  },
    "WORKTYPE": {
  "description": "Worktype of your bot. Use public or private, if it is private then only bot number can use it. If public then everyone can use it.",
         "value": "public"
  },
      "AUTO_REACTION": {
    "description": "Reacts emoji to all commands.",
     "value": "false",
     "required": false 
  },
  "PACK_INFO": {
    "description": "Put packname;authorname.",
     "value": "HARSHA_MD",
     "required": false 
  },
  "heroku": {
    "description": "Weather it is on heroku or not",
     "value": "true",
     "required": false 
  }
},
"formation": {
		"worker": {
			"quantity": 1,
			"size": "basic"
		}
	}
}
