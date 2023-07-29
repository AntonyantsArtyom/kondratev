const conditionerModels = {
   daikin: ["Default"],
   midea: ["GRGRGRGRGRG", "1", "2", "3", "4", "5", "6", "7", "trrr"],
   haier1: ["Big"],
   aux: ["VeryBig", "Big"],
   mitsubishi: ["MODEL", "MODEL2"],
   brend12: ["MODEL"],
}

for (brend in conditionerModels) {
   const text = `<div class="SelectingBlock SelectedConditioner" id="${brend}">
   <div class="BrandConditioner">${brend[0].toUpperCase() + brend.slice(1)}</div>
   <div class="SelectedIcon">
      <svg
         width="20"
         height="15"
         viewBox="0 0 20 15"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M0 8.13808L6.84888 15L20 1.86194L18.1119 0L6.84888 11.2499L1.86191 6.26303L0 8.13808Z"
            fill="#2C98F0"
         />
      </svg>
   </div>
</div>`
   document.querySelector(".SensorSelector").insertAdjacentHTML("beforeend", text)
}

var MainDisplay = document.getElementById("MainDisplay")
let MainDisplayTermostat = document.getElementById("MainDisplayTermostat")
let MainDisplayConditioner = document.getElementById("MainDisplayConditioner")
let TermostatBlock = document.getElementById("TermostatBlock")
let DispairHomekitBtn = document.getElementById("DispairHomekitBtn")
let SettingIcon = document.querySelectorAll(".SettingIcon")
let BackToMainDevicePage = document.getElementById("BackToMainDevicePage")
let DeviceSettings = document.getElementById("DeviceSettings")
let ResetSettings = document.getElementById("ResetSettings")
let DropHomekit = document.getElementById("DropHomekit")
let BlocksInfo = document.querySelectorAll(".BlockInfo")
let UpdateLytkoBtn = document.getElementById("UpdateLytkoBtn")
let UpdateDispleyBlock = document.getElementById("UpdateDispleyBlock")
let UpdateDisplayBtn = document.getElementById("UpdateDisplayBtn")
let DropUpWindowClose = document.querySelectorAll(".DropUpWindowClose")
let GetMQTTData = document.getElementById("GetMQTTData")
let BackToSettings = document.querySelectorAll(".BackToSettings")
let SettingItems = document.querySelectorAll(".SettingItem")
let SettingPage = document.querySelectorAll(".Tab")
let BackToMainDisplay = document.querySelectorAll(".BackToMainDisplay")
let MQTTReceivedInfo = document.getElementById("MQTTReceivedInfo")
let ConnectMQTTBtn = document.getElementById("ConnectMQTTBtn")
let DisconnectMQTTBtn = document.getElementById("DisconnectMQTTBtn")
let ZigBeeSensors = document.getElementById("ZigBeeSensors")
let ScrollingMenuSensorTemp = document.getElementById("ScrollingMenuSensorTemp")
let ClearZigBee = document.getElementById("ClearZigBee")
let DisconnectBtnZigBee = document.getElementById("DisconnectBtnZigBee")
let MqttInputData = document.getElementById("MqttInputData")
let TabloSensorTemp = document.getElementById("TabloSensorTemp")
let ChangingTempTabloSensor = document.getElementById("ChangingTempTabloSensor")
let ConnectInnerSensorBtn = document.getElementById("ConnectInnerSensorBtn")
let AddedTopic = document.getElementById("AddedTopic")
let DisconnectInnerSensorBtn = document.getElementById("DisconnectInnerSensorBtn")
let ChooseUpdateFileBtn = document.getElementById("ChooseUpdateFileBtn")
let LytkoUpdateBar = document.getElementsByClassName("LytkoUpdateBar")[0]
let LytkoUpdateInformation = document.getElementsByClassName("LytkoUpdateInformation")[0]
let InDevelop = document.getElementById("InDevelop")
let ChangeTempPositionBtn = document.getElementById("ChangeTempPositionBtn")
let InDevelopFunction = document.querySelectorAll(".InDevelopFunction")
let MainMenuWidgetComeHomeBlock = document.getElementsByClassName("MainMenuWidgetComeHomeBlock")[0]
let DropSettings = document.getElementById("DropSettings")
let HeatingTermostat = document.getElementById("HeatingTermostat")
let AccountSettings = document.getElementById("AccountSettings")
let BackToAccountSetting = document.getElementsByClassName("BackToAccountSetting")[0]
let AccountIcon = document.getElementById("AccountIcon")
let AlicePage = document.getElementById("AlicePage")
let AliceLink = document.getElementById("AliceLink")
let RestorePass = document.getElementById("RestorePass")
let Registration = document.getElementById("Registration")
let AliceLogIn = document.getElementById("AliceLogIn")
let AliceLogOut = document.getElementById("AliceLogOut")
let AliceInfoPopUp = document.getElementById("AliceInfoPopUp")
let DropUpRegistrationInfo = document.getElementById("DropUpRegistrationInfo")
let RegistrationPopUp = document.getElementById("RegistrationPopUp")
let CloseRegistrationInfo = document.getElementById("CloseRegistrationInfo")
let DropUpAliceInfo = document.getElementById("DropUpAliceInfo")
let CloseAliceInfo = document.getElementById("CloseAliceInfo")
let MainMenuWidgetArrowUp = document.querySelectorAll(".MainMenuWidgetArrowUp")
let MainMenuWidgetArrowDown = document.querySelectorAll(".MainMenuWidgetArrowDown")
let AutoTempHandler = document.querySelectorAll(".AutoTempHandler")
let HeatingTempHandler = document.getElementById("HeatingTempHandler")
let CoolTempHandler = document.getElementById("CoolTempHandler")
let FanHandler = document.getElementById("FanHandler")
let FanSpeedValue = document.getElementById("FanSpeedValue")
let InputName = document.getElementById("InputName")
var wifiBlocksFirstSetting = document.getElementsByClassName("WifiBlock")
let AliceShowPass = document.getElementById("AliceShowPass")
var ShowPassElem = document.getElementById("ShowPass")
let DispleySelect = document.getElementById("DispleySelect")
var ShowPassTrigger = true
var WifiSelected
var WifiPassword
var WifiConnectBtn = document.getElementById("WifiConnectBtn")
var WifiRefreshBtn = document.getElementById("RefreshWifiList")
let OneStageSettingDissapearElem = document.getElementById("OneStageSetting")
let TwoStageSettingDissapearElem = document.getElementById("TwoStageSetting")
let BackToOneStageSetting = document.getElementById("BackToOneStageSetting")
let ThreeStageSettingDissapearElem = document.getElementById("ThreeStageSetting")
let FourStageSettingDissapearElem = document.getElementById("FourStageSetting")
let GisteresisStageSetting = document.getElementById("GisteresisStageSetting")
let TempStageSetting = document.getElementById("TempStageSetting")
var TypeResistanceBlocks = document.getElementsByClassName("TypeResistanceBlock")
var ResistanceBtnNext = document.getElementById("ResistanceBtnNext")
var BackToWifiStage = document.getElementById("BackToWifiStage")
var ToResistanceTypeBtnBack = document.getElementById("ToResistanceTypeBtnBack")
var BackToFourStageFromGisteresis = document.getElementById("BackToFourStageFromGisteresis")
var BackToFourStageFromTemp = document.getElementById("BackToFourStageFromTemp")
var CompleteSettingBtn = document.getElementById("CompleteSettingBtn")
let ProgressUpdate = document.getElementById("ProgressUpdate")
let SensorsLine = document.getElementsByClassName("SensorsLine")[0]
let SelectChannelBtnComplete = document.querySelector(".CompletePanelSetting")
let SelectChannel = document.getElementById("SelectChannel")
let MaxTablo
let MinTablo
let GisteresisTablo
let CorrectionTablo
let CurrentUpdateSocket = null
let HeatingTrigger = false
let CurrentSocket = null
let FirstConfigurate = false
let TypeFirstConfigurate = ""
let FirstSettingChecker = true
let SelectingTypeChannel = document.querySelectorAll(".SelectingTypeChannel")
let SelectingPowerChannel = document.querySelectorAll(".SelectingPowerChannel")
var WifiIconArray = [
   '<svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d = "M0 5.00001L2 7.00001C6.97 2.03001 15.03 2.03001 20 7.00001L22 5.00001C15.93 -1.06999 6.08 -1.06999 0 5.00001ZM8 13L11 16L14 13C12.35 11.34 9.66 11.34 8 13ZM4 9.00001L6 11C8.76 8.24001 13.24 8.24001 16 11L18 9.00001C14.14 5.14001 7.87 5.14001 4 9.00001Z" fill = "#818288"/></svg >',
   '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d = "M1 9.00001L3 11C7.97 6.03001 16.03 6.03001 21 11L23 9.00001C16.93 2.93001 7.08 2.93001 1 9.00001ZM9 17L12 20L15 17C13.35 15.34 10.66 15.34 9 17ZM5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.14001 8.87 9.14001 5 13Z" fill = "#818288" /><path d="M9 17.0001L12 20.0001L15 17.0001C13.35 15.3401 10.66 15.3401 9 17.0001Z" fill="white" /></svg >',
   '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1 9.00001L3 11C7.97 6.03001 16.03 6.03001 21 11L23 9.00001C16.93 2.93001 7.08 2.93001 1 9.00001ZM9 17L12 20L15 17C13.35 15.34 10.66 15.34 9 17ZM5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.14001 8.87 9.14001 5 13Z" fill="#818288" /><path d="M9 17L12 20L15 17C13.35 15.34 10.66 15.34 9 17ZM5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.13998 8.87 9.13998 5 13Z" fill="white" /></svg>',
   '<svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d = "M0 5.00001L2 7.00001C6.97 2.03001 15.03 2.03001 20 7.00001L22 5.00001C15.93 -1.06999 6.08 -1.06999 0 5.00001ZM8 13L11 16L14 13C12.35 11.34 9.66 11.34 8 13ZM4 9.00001L6 11C8.76 8.24001 13.24 8.24001 16 11L18 9.00001C14.14 5.14001 7.87 5.14001 4 9.00001Z" fill = "white"/></svg >',
   '<svg width="22" height="19" viewBox="0 0 22 19" fill="none"><path d = "M21.99 8.00004C18.15 4.16004 12.8 2.76004 7.84 3.78004L10.36 6.30004C13.83 6.13004 17.35 7.35004 19.99 10L21.99 8.00004ZM17.99 12C16.7 10.71 15.15 9.87004 13.5 9.44004L17.03 12.97L17.99 12ZM1 2.05004L4.07 5.10004C2.6 5.82004 1.22 6.78004 0 8.00004L1.99 10C3.23 8.76004 4.66 7.84004 6.19 7.23004L8.43 9.47004C6.81 9.89004 5.27 10.73 4 12V12.01L5.99 14C7.35 12.64 9.13 11.96 10.91 11.94L17.98 19L19.25 17.74L2.29 0.790039L1 2.05004ZM8 16L11 19L14 16C12.35 14.34 9.66 14.34 8 16Z" fill = "#818288"/></svg >',
]
var WifiDefCollection = {
   5: "WEP",
   2: "WPA / PSK",
   4: "WPA2 / PSK",
   7: "Открытая сеть",
   8: "WPA / WPA2 / PSK",
}
var WifiDefCollectionPanel = {
   0: "Открытая сеть",
   1: "WEP",
   2: "WPA / PSK",
   3: "WPA2 / PSK",
   4: "WPA / WPA2 / PSK",
   5: "WPA2 / ENTERPRISE",
   6: "MAX",
}
var SensorIdCollection = {
   Digital: 0,
   "3.3_кОм": 1,
   "5_кОм": 2,
   "6.8_кОм": 3,
   "10_кОм(Lytko)": 4,
   "12_кОм": 5,
   "14.8_кОм": 6,
   "15_кОм": 7,
   "20_кОм": 8,
   "33_кОм": 9,
   "47_кОм": 10,
}
var configTermostat = {
   config: {
      wifi_name: "",
      wifi_pass: "",
      homekit: 0,
      hysteresis: 1,
      max_temp: 40,
      min_temp: 15,
      sensor_corr: 0,
      sensor_model_id: null,
      sensor_internal_use: 0,
   },
}
var configConditioner = {
   config: {
      wifi_name: "",
      wifi_pass: "",
      air_brand: "",
      air_model: "",
      homekit: "",
   },
}
var configPanel = {
   config: {
      wifi_name: "",
      wifi_pass: "",
   },
}
var configPanelChannel = {
   ConfCh1: {
      config_1ch: {
         type: "thermostat",
         sensor_model_id: "4",
         sensor_corr: "0.00",
         hysteresis: "1.00",
         max_temp: "40",
         min_temp: "15",
         power: "8",
      },
   },
   ConfCh2: {
      config_2ch: {
         type: "thermostat",
         sensor_model_id: "4",
         sensor_corr: "0.00",
         hysteresis: "1.00",
         max_temp: "40",
         min_temp: "15",
         power: "8",
      },
   },
}
let TypeChannelSelect
function getKeyByValue(object, value) {
   return Object.keys(object).find((key) => object[key] === value)
}
function SwitchElem(Disappear, Appear) {
   Disappear.style.display = "none"
   Appear.style.display = "flex"
}
let TitleChannelPanelSetting = document.getElementById("SelectChannel")
function FirstSettingsTools() {
   let ModeOfWork = document.getElementById("ModeOfWork")
   let BackConditioner = document.getElementById("BackConditioner")
   let BackTermostat = document.getElementById("BackTermostat")
   let MqttModeWork = document.getElementById("MqttModeWork")
   if (CurrentSocket.type != "esp32_panel_4inch") {
      MqttModeWork.querySelector(".SelectedIcon").style.display = "flex"
      ModeOfWork.onclick = function () {
         let ModeWorkDevice = document.getElementById("ModeWorkDevice")
         SwitchElem(this.parentElement.parentElement, ModeWorkDevice)
      }
      BackToOneStageSetting.onclick = function () {
         SwitchElem(TwoStageSettingDissapearElem, OneStageSettingDissapearElem)
      }
      BackToWifiStage.onclick = function () {
         if (WifiSelected.querySelectorAll(".GuardTypeWifi")[0].innerHTML === "Открытая сеть") {
            SwitchElem(ThreeStageSettingDissapearElem, OneStageSettingDissapearElem)
         } else {
            SwitchElem(ThreeStageSettingDissapearElem, TwoStageSettingDissapearElem)
         }
      }
      CompleteSettingBtn.onclick = function () {
         showModelMenu()
         /*
         if (CurrentSocket.type === "esp8266_thermostat" || CurrentSocket.type === "esp8266_thermostat_plus")
            CurrentSocket.Socket.send(JSON.stringify(configTermostat))
         else CurrentSocket.Socket.send(JSON.stringify(configConditioner))
         SetLoader(999, null)*/
      }
      CompleteSettingBtnTwo.onclick = function () {
         console.log("настройка завершена")
         console.log(configConditioner)
         CurrentSocket.Socket.send(JSON.stringify(configConditioner))
         /*
         if (CurrentSocket.type === "esp8266_thermostat" || CurrentSocket.type === "esp8266_thermostat_plus")
            CurrentSocket.Socket.send(JSON.stringify(configTermostat))
         else CurrentSocket.Socket.send(JSON.stringify(configConditioner))*/
         SetLoader(999, null)
      }
   } else if (CurrentSocket.type === "esp32_panel_4inch") {
      SelectTypePanelChannel(SelectingTypeChannel[0])
      SelectingTypeChannel.forEach((item) => {
         item.onclick = function () {
            SelectTypePanelChannel(this)
         }
      })
      SelectPowerChannel(SelectingPowerChannel[0])
      SelectingPowerChannel.forEach((item) => {
         item.onclick = function () {
            SelectPowerChannel(this)
         }
      })
      let ResistanceKey = getKeyByValue(SensorIdCollection, 4)
      let ResistanceItem = SearchByHtmlCollectionByIdOrNull(TypeResistanceBlocks, ResistanceKey)
      if (ResistanceItem != null) {
         SelectResistance(ResistanceItem)
      }
      TabloTempInitialization()
      PanelSettingNav()
   }
   configConditioner.config.homekit = 0
   configTermostat.config.homekit = 0

   let SelectingModeWork = document.querySelectorAll(".SelectingModeWork")
   SelectingModeWork.forEach(
      (item) =>
         (item.onclick = function () {
            console.log("Выбор режима Алиса/Mqtt")
            SelectingModeWork.forEach((item) => (item.querySelector(".SelectedIcon").style.display = "none"))
            this.querySelector(".SelectedIcon").style.display = "flex"
            if (this.parentElement.id === "ConditionerModeWork") {
               configConditioner.config.homekit = this.id === "MqttModeWork" ? 0 : 2
            } else if (this.parentElement.id === "TeromstatModeWork") {
               configTermostat.config.homekit = this.id === "MqttModeWork" ? 0 : 2
            }
            console.log(configConditioner.config)
         })
   )
   if (CurrentSocket.type === "esp8266_air") {
      BackConditioner.onclick = function () {
         console.log(1)
         SwitchElem(ModeWorkDevice, ThreeStageSettingDissapearElem)
      }
      let GetBrand = document.getElementById(configConditioner.config.air_brand)
      GetBrand.querySelector(".SelectedIcon").style.display = "block"
   } else if (CurrentSocket.type === "esp8266_thermostat" || CurrentSocket.type === "esp8266_thermostat_plus") {
      BackTermostat.onclick = function () {
         SwitchElem(ModeWorkDevice, FourStageSettingDissapearElem)
      }
      if (CurrentSocket.config.sensor_internal_use === "255") {
         let InnerSensorBlock = document.getElementById("InnerSensorBlock")
         InnerSensorBlock.style.display = "none"
         configTermostat.config.sensor_internal_use = 255
      }
      let ResistanceKey = getKeyByValue(SensorIdCollection, 4)
      let ResistanceItem = SearchByHtmlCollectionByIdOrNull(TypeResistanceBlocks, ResistanceKey)
      if (ResistanceItem != null) {
         SelectResistance(ResistanceItem)
      }
   }
   if (CurrentSocket.type === "esp8266_thermostat" || CurrentSocket.type === "esp8266_thermostat_plus") {
      TabloTempInitialization()
      ResistanceBtnNext.onclick = function () {
         if (configTermostat.config.sensor_model_id != null)
            SwitchElem(ThreeStageSettingDissapearElem, FourStageSettingDissapearElem)
      }
      ToResistanceTypeBtnBack.onclick = function () {
         SwitchElem(FourStageSettingDissapearElem, ThreeStageSettingDissapearElem)
      }
      BackToFourStageFromGisteresis.onclick = function () {
         SwitchElem(GisteresisStageSetting, FourStageSettingDissapearElem)
      }
      BackToFourStageFromTemp.onclick = function () {
         SwitchElem(TempStageSetting, FourStageSettingDissapearElem)
      }
      FirstGisteresisSetting.onclick = function () {
         SwitchElem(FourStageSettingDissapearElem, GisteresisStageSetting)
      }
      FirstTempSetting.onclick = function () {
         SwitchElem(FourStageSettingDissapearElem, TempStageSetting)
      }
   }
   InDevelopFunction.forEach((item) => (item.onclick = ShowInDevelop))
}
function SelectPowerChannel(item) {
   SelectingPowerChannel.forEach((item) => (item.querySelector(".SelectedIcon").style.display = "none"))
   item.querySelector(".SelectedIcon").style.display = "block"
   if (item.id === "16A") {
      if (FirstChannelSelectChecker) {
         configPanelChannel.ConfCh2.config_2ch.power = "16"
      } else {
         configPanelChannel.ConfCh1.config_1ch.power = "16"
      }
   }
   if (item.id === "8A") {
      if (FirstChannelSelectChecker) {
         configPanelChannel.ConfCh2.config_2ch.power = "8"
      } else {
         configPanelChannel.ConfCh1.config_1ch.power = "8"
      }
   }
}
function SelectTypePanelChannel(item) {
   SelectingTypeChannel.forEach((item) => (item.querySelector(".SelectedIcon").style.display = "none"))
   item.querySelector(".SelectedIcon").style.display = "block"
   if (item.id === "TermostatType") {
      if (!FirstChannelSelectChecker) {
         configPanelChannel.ConfCh1.config_1ch.type = "thermostat"
      } else {
         configPanelChannel.ConfCh2.config_2ch.type = "thermostat"
         SelectChannelBtnComplete.style.display = "none"
         NextPanelSettingChannel.style.display = "block"
      }
      TypeChannelSelect = "thermostat"
   } else if (item.id === "light") {
      if (!FirstChannelSelectChecker) {
         if (CurrentSocket.config_2ch.type === "none") {
            SelectChannelBtnComplete.style.display = "block"
            NextPanelSettingChannel.style.display = "none"
         } else {
            SelectChannelBtnComplete.style.display = "none"
            NextPanelSettingChannel.style.display = "block"
         }
         configPanelChannel.ConfCh1.config_1ch.type = "light"
      } else {
         configPanelChannel.ConfCh2.config_2ch.type = "light"
         if (FirstChannelSelectChecker) {
            CompletePanelSettingChannel.style.display = "block"
            NextPanelSettingChannel.style.display = "none"
         }
      }
      TypeChannelSelect = "light"
   } else {
      if (!FirstChannelSelectChecker) {
         configPanelChannel.ConfCh1.config_1ch.type = "none"
      } else {
         configPanelChannel.ConfCh2.config_2ch.type = "none"
         SelectChannelBtnComplete.style.display = "block"
         NextPanelSettingChannel.style.display = "none"
      }
      TypeChannelSelect = "none"
   }
}
let FirstChannelSelectChecker = 0
let TermostatChannelChecker = 0
let NextGisterSetting = document.getElementById("NextGisterSetting")
let GisterCompleteSettings = document.getElementById("GisterCompleteSettings")
function PanelSettingNav() {
   let NavElem = document.querySelectorAll(".NavElem")
   let NavPage = document.querySelectorAll(".Tab")
   NavElem.forEach(
      (item) =>
         (item.onclick = function () {
            let ClassName = this.classList[0]
            if (ClassName === "CompletePanelSetting") {
               let TypeLightDeviceCh1 = { config_1ch: { type: "" } }
               let TypeLightDeviceCh2 = { config_2ch: { type: "" } }
               let TypeNoneDeviceCh2 = { config_2ch: { type: "none" } }
               if (configPanelChannel.ConfCh1.config_1ch.type === "light") {
                  TypeLightDeviceCh1.config_1ch.type = configPanelChannel.ConfCh1.config_1ch.type
                  CurrentSocket.Socket.send(JSON.stringify(TypeLightDeviceCh1))
               } else {
                  CurrentSocket.Socket.send(JSON.stringify(configPanelChannel.ConfCh1))
               }
               if (configPanelChannel.ConfCh2.config_2ch.type === "light") {
                  TypeLightDeviceCh2.config_2ch.type = configPanelChannel.ConfCh2.config_2ch.type
                  CurrentSocket.Socket.send(JSON.stringify(TypeLightDeviceCh2))
               } else if (configPanelChannel.ConfCh2.config_2ch.type === "thermostat") {
                  CurrentSocket.Socket.send(JSON.stringify(configPanelChannel.ConfCh2))
               } else if (configPanelChannel.ConfCh2.config_2ch.type === "none") {
                  CurrentSocket.Socket.send(JSON.stringify(TypeNoneDeviceCh2))
               }
               CurrentSocket.Socket.send(JSON.stringify(configPanel))
            }
            if (this.id === "NextPanelSettingChannel") {
               if (TypeChannelSelect === "light") {
                  ClassName = "SelectChannel"
                  FirstChannelSelectChecker++
                  DetermineChannle()
                  SelectTypePanelChannel(SelectingTypeChannel[0])
               } else {
                  //FirstChannelSelectChecker++
                  DetermineChannle()
               }
            }
            if (this.id === "BackFromChTypeResist") {
               if (FirstChannelSelectChecker) {
                  DetermineChannle()
               } else if (TermostatChannelChecker) {
                  DetermineChannle()
               }
            }
            if (this.id === "SelectChannelBackCh") {
               if (FirstChannelSelectChecker) {
                  if (configPanelChannel.ConfCh1.config_1ch.type === "light") {
                     FirstChannelSelectChecker--
                     ClassName = "SelectChannel"
                  } else if (configPanelChannel.ConfCh1.config_1ch.type === "thermostat") {
                     ClassName = "TermostatTempSettingPanel"
                     FirstChannelSelectChecker--
                  }
                  DetermineChannle()
               } else {
                  ClassName = "WifiPasswordPanel"
               }
            }
            if (ClassName === "TypeResystancePanel" || ClassName === "TermostatTempSettingPanel") {
               if (!FirstChannelSelectChecker & (ArraySocket[0].type_2ch != "none")) {
                  if (configPanelChannel.ConfCh1.config_1ch.power === "16") {
                     NextGisterSetting.style.display = "none"
                     GisterCompleteSettings.style.display = "block"
                  } else {
                     NextGisterSetting.style.display = "block"
                     GisterCompleteSettings.style.display = "none"
                  }
               } else {
                  NextGisterSetting.style.display = "none"
                  GisterCompleteSettings.style.display = "block"
               }
            }
            if (this.id === "NextGisterSetting") {
               FirstChannelSelectChecker++
               DetermineChannle()
               SelectTypePanelChannel(SelectingTypeChannel[0])
            }
            if (ClassName === "TypeResystancePanel") {
               let ResistanceKey
               let ResistanceItem
               if (!FirstChannelSelectChecker) {
                  ResistanceKey = getKeyByValue(
                     SensorIdCollection,
                     Number(configPanelChannel.ConfCh1.config_1ch.sensor_model_id)
                  )
                  ResistanceItem = SearchByHtmlCollectionByIdOrNull(TypeResistanceBlocks, ResistanceKey)
                  if (ResistanceItem != null) {
                     SelectResistance(ResistanceItem)
                  }
               } else {
                  ResistanceKey = getKeyByValue(
                     SensorIdCollection,
                     Number(configPanelChannel.ConfCh2.config_2ch.sensor_model_id)
                  )
                  ResistanceItem = SearchByHtmlCollectionByIdOrNull(TypeResistanceBlocks, ResistanceKey)
                  if (ResistanceItem != null) {
                     SelectResistance(ResistanceItem)
                  }
               }
            }
            if (ClassName === "SelectPower") {
               SelectPowerChannel(SelectingPowerChannel[0])
               SelectingPowerChannel.forEach((item) => {
                  item.onclick = function () {
                     SelectPowerChannel(this)
                  }
               })
               if (FirstChannelSelectChecker) {
                  SelectingPowerChannel[1].style.display = "none"
               } else {
                  SelectingPowerChannel[1].style.display = "flex"
               }
            }
            let TargetNavElem = this

            NavPage.forEach((item) => {
               item.style.display = "none"
               if (item.id === "SelectChannelBack") {
                  if (configPanelChannel.ConfCh1.type != "none") {
                     FirstChannelSelectChecker--
                     DetermineChannle()
                  } else {
                     NavPage.forEach(
                        (item) =>
                           function () {
                              if (this.id === "TermostatTempSettingPanel") this.style.display = "block"
                           }
                     )
                  }
               } else if (item.id === ClassName) item.style.display = "block"
            })
         })
   )
}
function DetermineChannle() {
   let title = TitleChannelPanelSetting.querySelector(".SettingsInfoTitle").querySelector("span")
   let CompletePanelSettingChannel = document.getElementById("CompletePanelSettingChannel")
   let NextPanelSettingChannel = document.getElementById("NextPanelSettingChannel")
   let NoneType = document.getElementById("NoneType")
   if (FirstChannelSelectChecker) {
      title.innerHTML = "2 Канал"
      NoneType.style.display = "flex"
      return true
   } else {
      NoneType.style.display = "none"
      //if (CurrentSocket.config_1ch != null) {
      //    if (CurrentSocket.config_2ch.type != 'none') {
      //        CompletePanelSettingChannel.style.display = 'none';
      //        NextPanelSettingChannel.style.display = 'block';
      //    } else {
      //        CompletePanelSettingChannel.style.display = 'none';
      //        NextPanelSettingChannel.style.display = 'block';
      //    }

      //}
      CompletePanelSettingChannel.style.display = "none"
      NextPanelSettingChannel.style.display = "block"
      title.innerHTML = "1 Канал"
      return false
   }
}
ShowPass.onclick = function () {
   let ShowIcon = document.getElementById("ShowIcon")
   let NotShowIcon = document.getElementById("NotShowIcon")
   if (ShowPassTrigger) {
      let PassInput = document.getElementById("PasswordFirstSetting")
      PassInput.type = "text"
      ShowPassTrigger = !ShowPassTrigger
      NotShowIcon.style.display = "none"
      ShowIcon.style.display = "block"
   } else {
      let PassInput = document.getElementById("PasswordFirstSetting")
      PassInput.type = "password"
      ShowPassTrigger = !ShowPassTrigger
      NotShowIcon.style.display = "block"
      ShowIcon.style.display = "none"
   }
}
function SelectResistance(Item) {
   let checkedSelectedIcon = Item.children[1].style.display
   let SensorSelector = document.getElementsByClassName("SensorSelector")[0]
   if (Item.id != "InnerSensorBlock") {
      if (checkedSelectedIcon === "none" || checkedSelectedIcon === "") {
         SensorSelector.querySelectorAll(".SelectedIcon").forEach((item) =>
            item.id != "InnerSensorIcon" ? (item.style.display = "none") : false
         )
         Item.children[1].style.display = "block"
         configTermostat.config.sensor_model_id = SensorIdCollection[Item.id]
         if (FirstChannelSelectChecker === 1) {
            configPanelChannel.ConfCh2.config_2ch.sensor_model_id = SensorIdCollection[Item.id]
         } else {
            configPanelChannel.ConfCh1.config_1ch.sensor_model_id = SensorIdCollection[Item.id]
         }
         if (!FirstConfigurate) {
            if (CurrentSocket.type === "esp32_panel_4inch") {
               if (!CurrentSocket.channel_number)
                  CurrentSocket.Socket.send(
                     JSON.stringify({ config_1ch: { sensor_model_id: SensorIdCollection[Item.id] } })
                  )
               else {
                  CurrentSocket.Socket.send(
                     JSON.stringify({ config_2ch: { sensor_model_id: SensorIdCollection[Item.id] } })
                  )
                  TermostatChannelChecker++
               }
            } else CurrentSocket.Socket.send(JSON.stringify({ sensor_model_id: SensorIdCollection[Item.id] }))
            SetLoader(10, function () {
               location.host = location.host
            })
         }
      }
   } else {
      if (checkedSelectedIcon === "none" || checkedSelectedIcon === "") {
         Item.children[1].style.display = "block"
         configTermostat.config.sensor_internal_use = 1
         if (!FirstConfigurate) {
            CurrentSocket.Socket.send(
               JSON.stringify({
                  sensor_internal_use: 1,
               })
            )
         }
      } else {
         Item.children[1].style.display = "none"
         configTermostat.config.sensor_internal_use = 0
         if (!FirstConfigurate)
            CurrentSocket.Socket.send(
               JSON.stringify({
                  sensor_internal_use: 0,
               })
            )
      }
   }
}
for (i = 0; TypeResistanceBlocks.length > i; i++) {
   TypeResistanceBlocks[i].children[1].style.display = "none"
   TypeResistanceBlocks[i].onclick = function () {
      SelectResistance(this)
   }
}
function InsertSensors() {
   let ChannlePanel = null
   let SensorModelId
   if (CurrentSocket.type === "esp32_panel_4inch") {
      ChannlePanel = CurrentSocket.active_channel === 0 ? CurrentSocket.config_1ch : CurrentSocket.config_2ch
      SensorModelId = ChannlePanel.sensor_model_id
   } else {
      SensorModelId = CurrentSocket.config.sensor_model_id
   }
   if ((SensorModelId != "") & (SensorModelId != undefined) & (SensorModelId != null)) {
      document.querySelectorAll(".TypeResistanceBlock").forEach((item) => (item.children[1].style.display = "none"))
      let SensorType = getKeyByValue(SensorIdCollection, Number(SensorModelId))
      SearchByHtmlCollectionByIdOrNull(TypeResistanceBlocks, SensorType).querySelector(".SelectedIcon").style.display =
         "block"
   }
   if (CurrentSocket.config.sensor_internal_use === "1") {
      SearchByHtmlCollectionByIdOrNull(TypeResistanceBlocks, "InnerSensorBlock").querySelector(
         ".SelectedIcon"
      ).style.display = "block"
   }
   let InnerSensorBlock = document.getElementById("InnerSensorBlock")
   let Sensor47 = document.getElementById("47_кОм")
   let Digital = document.getElementById("Digital")
   if (CurrentSocket.config.sensor_internal_use === "255" || CurrentSocket.type === "esp32_panel_4inch") {
      InnerSensorBlock.style.display = "none"
      Sensor47.style.display = "none"
   } else if (CurrentSocket.type === "esp8266_thermostat_plus") {
      InnerSensorBlock.style.display = "none"
      Sensor47.style.display = "none"
   } else {
      InnerSensorBlock.style.display = "flex"
      Sensor47.style.display = "flex"
   }
   if (CurrentSocket.type === "esp8266_thermostat_plus" || CurrentSocket.type === "esp8266_thermostat") {
      Digital.style.display = "flex"
   } else {
      Digital.style.display = "none"
   }
}
let SelectedConditioner = document.querySelectorAll(".SelectedConditioner")
SelectedConditioner.forEach((item) =>
   item != null
      ? (item.onclick = function () {
           SelectConditionerBlock(this)
        })
      : false
)
function SelectConditionerBlock(Item) {
   let checkedSelectedIcon = getComputedStyle(Item.children[1]).display
   if (checkedSelectedIcon === "none" || checkedSelectedIcon === "") {
      document
         .getElementsByClassName("ConditionerPage")[0]
         .querySelectorAll(".SelectedIcon")
         .forEach((item) => (item.style.display = "none"))
      Item.children[1].style.display = "block"
      configConditioner.config.air_brand = Item.id
      if (!FirstConfigurate) {
         CurrentSocket.Socket.send(
            JSON.stringify({
               config: {
                  air_brand: configConditioner.config.air_brand,
               },
            })
         )
      }
   } else {
      Item.children[1].style.display = "none"
      configConditioner.config.air_brand = null
   }
}
function InsertConditionerBrand() {
   if (CurrentSocket.config.air_brand != undefined) {
      let GetBrand = document.getElementById(CurrentSocket.config.air_brand)
      SelectConditionerBlock(GetBrand)
   }
}
let AllArrow = document.querySelectorAll(".ArrowTemp")
AllArrow.forEach((item) => (item.onclick = ChangeTempDynamic))
let TypeChangingTempArray = {
   TabloTempMin: "Standart",
   TabloTempMax: "Standart",
   TabloTempGisteresis: "Gisteresis",
   TabloTempCorrection: "Correction",
}
let GisteresisInvertArray = { 1: "1.00", 2: "2.00", 3: "3.00", 4: "4.00", 5: "5.00" }
let CorrectionInvertArray = {
   "-5": "-5.00",
   "-4.5": "-4.50",
   "-4": "-4.00",
   "-3.5": "-3.50",
   "-3": "-3.00",
   "-2.5": "-2.50",
   "-2": "-2.00",
   "-1.5": "-1.50",
   "-1": "-1.00",
   "-0.5": "-0.50",
   0: "0.00",
   5: "5.00",
   4.5: "4.50",
   4: "4.00",
   3.5: "3.50",
   3: "3.00",
   2.5: "2.50",
   2: "2.00",
   1.5: "1.50",
   1: "1.00",
   0.5: "0.50",
}
function ChangeTempDynamic() {
   let Tablo = this.parentElement.querySelector(".ChangingTempTablo")
   let MaxTabloTemp = Number(MaxTablo.innerHTML)
   let MinTabloTemp = Number(MinTablo.innerHTML)
   let TypeChangingTemp = this.parentElement.id
   let DirectionChangeTemp = this.classList.contains("TempUp")
   let Sum
   let RangeStart
   let RangeEnd
   if (TypeChangingTempArray[TypeChangingTemp] === "Standart") {
      RangeStart = 1
      RangeEnd = 75
   } else if (TypeChangingTempArray[TypeChangingTemp] === "Gisteresis") {
      RangeStart = 1
      RangeEnd = 5
   } else if (TypeChangingTempArray[TypeChangingTemp] === "Correction") {
      RangeStart = -5
      RangeEnd = 5
   }
   let StepCountingTemp = 1
   if (TypeChangingTemp === "TabloTempCorrection") StepCountingTemp = 0.5
   let CurrentTemp = Number(Tablo.innerText)
   let DifferenceTemp = MaxTabloTemp - MinTabloTemp
   if (TypeChangingTempArray[TypeChangingTemp] === "Standart") {
      if (DirectionChangeTemp & (CurrentTemp < RangeEnd)) {
         if ((CurrentTemp === MinTabloTemp) & (DifferenceTemp === 1)) {
            Tablo.innerHTML = CurrentTemp
         } else {
            Sum = CurrentTemp + StepCountingTemp
            Tablo.innerHTML = Sum
            if (!FirstConfigurate & !configActive) {
               if (TypeChangingTemp === "TabloTempMin") {
                  if (CurrentSocket.type === "esp32_panel_4inch") {
                     if (!CurrentSocket.channel_number)
                        CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { min_temp: Sum } }))
                     else CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { min_temp: Sum } }))
                  } else CurrentSocket.Socket.send(JSON.stringify({ min_temp: Sum }))
               } else {
                  if (CurrentSocket.type === "esp32_panel_4inch") {
                     if (!CurrentSocket.channel_number)
                        CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { max_temp: Sum } }))
                     else CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { max_temp: Sum } }))
                  } else CurrentSocket.Socket.send(JSON.stringify({ max_temp: Sum }))
               }
            }
         }
      } else if (!DirectionChangeTemp & (CurrentTemp > RangeStart)) {
         if ((CurrentTemp === MaxTabloTemp) & (DifferenceTemp === 1)) {
            Tablo.innerHTML = CurrentTemp
         } else {
            Sum = CurrentTemp - StepCountingTemp
            Tablo.innerHTML = Sum
            if (!FirstConfigurate & !configActive) {
               if (TypeChangingTemp === "TabloTempMin") {
                  if (CurrentSocket.type === "esp32_panel_4inch") {
                     if (!CurrentSocket.channel_number)
                        CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { min_temp: Sum } }))
                     else CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { min_temp: Sum } }))
                  } else CurrentSocket.Socket.send(JSON.stringify({ min_temp: Sum }))
               } else {
                  if (CurrentSocket.type === "esp32_panel_4inch") {
                     if (!CurrentSocket.channel_number)
                        CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { max_temp: Sum } }))
                     else CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { max_temp: Sum } }))
                  } else CurrentSocket.Socket.send(JSON.stringify({ max_temp: Sum }))
               }
            }
         }
      } else Tablo.innerHTML = CurrentTemp
      if (TypeChangingTemp === "TabloTempMin") {
         if (PanelMenu) {
            if (FirstChannelSelectChecker === 1) configPanelChannel.ConfCh2.config_2ch.min_temp = Sum
            else configPanelChannel.ConfCh1.config_1ch.min_temp = Sum
         } else {
            configTermostat.config.min_temp = Sum
         }
      }
      if (TypeChangingTemp === "TabloTempMax")
         if (PanelMenu) {
            if (FirstChannelSelectChecker === 1) configPanelChannel.ConfCh2.config_2ch.max_temp = Sum
            else configPanelChannel.ConfCh1.config_1ch.max_temp = Sum
         } else {
            configTermostat.config.max_temp = Sum
         }
   } else {
      if (DirectionChangeTemp & (CurrentTemp < RangeEnd)) {
         Sum = CurrentTemp + StepCountingTemp
         Tablo.innerHTML = Sum
      } else if (!DirectionChangeTemp & (CurrentTemp > RangeStart)) {
         Sum = CurrentTemp - StepCountingTemp
         Tablo.innerHTML = Sum
      } else Tablo.innerHTML = CurrentTemp
      if ((TypeChangingTemp === "TabloTempGisteresis") & (GisteresisInvertArray[Sum] != undefined)) {
         if (PanelMenu) {
            if (FirstChannelSelectChecker === 1)
               configPanelChannel.ConfCh2.config_2ch.hysteresis = GisteresisInvertArray[Sum]
            else configPanelChannel.ConfCh1.config_1ch.hysteresis = GisteresisInvertArray[Sum]
         } else {
            configTermostat.config.hysteresis = GisteresisInvertArray[Sum]
         }
         if (!FirstConfigurate & !configActive) {
            if (CurrentSocket.type === "esp32_panel_4inch") {
               if (!CurrentSocket.channel_number)
                  CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { hysteresis: GisteresisInvertArray[Sum] } }))
               else
                  CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { hysteresis: GisteresisInvertArray[Sum] } }))
            } else CurrentSocket.Socket.send(JSON.stringify({ hysteresis: GisteresisInvertArray[Sum] }))
         }
      }
      if ((TypeChangingTemp === "TabloTempCorrection") & (CorrectionInvertArray[Sum] != undefined)) {
         if (!FirstConfigurate & !configActive) {
            if (CurrentSocket.type === "esp32_panel_4inch") {
               if (!CurrentSocket.channel_number)
                  CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { sensor_corr: CorrectionInvertArray[Sum] } }))
               else
                  CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { sensor_corr: CorrectionInvertArray[Sum] } }))
            } else CurrentSocket.Socket.send(JSON.stringify({ sensor_corr: CorrectionInvertArray[Sum] }))
         }
         if (PanelMenu) {
            if (FirstChannelSelectChecker === 1) configPanelChannel.ConfCh2.config_2ch.sensor_corr = Sum
            else configPanelChannel.ConfCh1.config_1ch.sensor_corr = Sum
         } else {
            configTermostat.config.sensor_corr = Sum
         }
      }
   }
}
window.onload = function () {
   ArraySocket.push(
      (ArraySocketItem = {
         Socket: new WebSocket("ws://" + location.host + "/ws"),
         config: null,
         config_1ch: null,
         config_2ch: null,
         type_1ch: null,
         type_2ch: null,
         update: null,
         mqtt_topics: null,
         wifi_networks: null,
         qr_hk: null,
         ssdp: null,
         ip: null,
         id_for_use_ch1: null,
         id_for_use_ch2: null,
         channel_number: null,
         active_channel: null,
         update_1ch: null,
         update_2ch: null,
      })
   )
   ArraySocket.forEach((item) => (item != null ? WebSocketOpen(item) : false))
}
var ArraySocket = new Array()
var ArraySocketItem = {
   Socket: null,
   id: null,
   type: null,
}
let DeviceConfigArray = new Array()
function WebSocketOpen(SocketItemDevice) {
   SocketItemDevice.Socket.onopen = function (evt) {}
   SocketItemDevice.Socket.onerror = function (error) {
      console.log("Error " + error.message)
   }
   SocketItemDevice.Socket.close = function (event) {
      if (event.wasClean) {
         console.log("Connection closed cleanly")
         wsOpen()
      } else {
         console.log("Connection failed")
      }
      console.log("Code: " + event.code + " reason: " + event.reason)
   }
   SocketItemDevice.Socket.onmessage = function (event) {
      console.log("сообщение сокета")
      var MessageJson = JSON.parse(event.data)
      if ("ssdp" in MessageJson) {
         if (ArraySocket[0].Socket === this) {
            for (let i = 0; MessageJson.ssdp.length > i; i++) {
               if (ArraySocket[i] && ArraySocket[i].Socket === this) {
                  ArraySocket[i].ssdp = MessageJson.ssdp
                  ArraySocket[i].type = MessageJson.ssdp[i].type
                  ArraySocket[i].id = MessageJson.ssdp[i].id
                  ArraySocket[i].id_for_use_ch1 = MessageJson.ssdp[i].id + "type_1ch"
                  ArraySocket[i].id_for_use_ch2 = MessageJson.ssdp[i].id + "type_2ch"
                  ArraySocket[i].ip = MessageJson.ssdp[i].ip
                  ArraySocket[i].type_1ch =
                     MessageJson.ssdp[i].type_1ch != undefined ? MessageJson.ssdp[i].type_1ch : null
                  ArraySocket[i].type_2ch =
                     MessageJson.ssdp[i].type_2ch != undefined ? MessageJson.ssdp[i].type_2ch : null
               } else if (ArraySocket.find((item) => item.id === MessageJson.ssdp[i].id) === undefined) {
                  ArraySocket.push(
                     (ArraySocketItem = {
                        Socket: new WebSocket("ws://" + MessageJson.ssdp[i].ip + "/ws"),
                        id: MessageJson.ssdp[i].id,
                        type: MessageJson.ssdp[i].type,
                        ssdp: MessageJson.ssdp,
                        ip: MessageJson.ssdp[i].ip,
                        type_1ch: MessageJson.ssdp[i].type_1ch != undefined ? MessageJson.ssdp[i].type_1ch : null,
                        type_2ch: MessageJson.ssdp[i].type_2ch != undefined ? MessageJson.ssdp[i].type_2ch : null,
                        id_for_use_ch1: MessageJson.ssdp[i].id + "type_1ch",
                        id_for_use_ch2: MessageJson.ssdp[i].id + "type_2ch",
                     })
                  )
                  WebSocketOpen(ArraySocket[i])
               }
            }
         }
      }
      if (MessageJson.wifi_networks != null) {
         if (ArraySocket[0].Socket === this) {
            ArraySocket[0].wifi_networks = MessageJson.wifi_networks
            ShowWifiList(ArraySocket[0].wifi_networks)
         }
      }
      if ("config" in MessageJson) {
         if (MessageJson.config != "{}") {
            for (let i = 0; ArraySocket.length > i; i++) {
               if (ArraySocket[i].id === SocketItemDevice.id) {
                  ArraySocket[i].config = MessageJson.config
                  if (ArraySocket[0].config != null && configActive != "0") {
                     CurrentSocket = ArraySocket[0]
                     FirstConfigurate = true
                     if (FirstSettingChecker) {
                        FirstSettingChecker = false
                        FirstSettingsTools()
                     }
                     if (ArraySocket[0].type === "esp32_panel_4inch") {
                        ArraySocket[0].type_1ch = "thermostat"
                        ArraySocket[0].type_2ch = "thermostat"
                        configPanelChannel.ConfCh1.config_1ch.type = ArraySocket[0].type_1ch
                        configPanelChannel.ConfCh2.config_2ch.type = ArraySocket[0].type_2ch
                     }
                  } else if (configActive === 0) {
                     let DeviceBlockCheck = document.getElementById(ArraySocket[i].id)
                     if (!DeviceBlockCheck && ArraySocket[i].type != "esp32_panel_4inch") {
                        CreateDeviceBlock(SocketItemDevice, ArraySocket[i].type)
                     } else if (ArraySocket[i].type === "esp32_panel_4inch") {
                        let DeviceBlockCh1 = document.getElementById(ArraySocket[i].id_for_use_ch1)
                        let DeviceBlockCh2 = document.getElementById(ArraySocket[i].id_for_use_ch2)
                        if (DeviceBlockCh1) {
                           let NameBlockCh1 = DeviceBlockCh1.querySelector(".DeviceBlockTitle")
                           NameBlockCh1.innerHTML =
                              (ArraySocket[i].config.name != null) & (ArraySocket[i].config.name != undefined)
                                 ? ArraySocket[i].config.name
                                 : "X"
                        }
                        if (DeviceBlockCh2) {
                           let NameBlockCh2 = DeviceBlockCh2.querySelector(".DeviceBlockTitle")
                           NameBlockCh2.innerHTML =
                              (ArraySocket[i].config.name != null) & (ArraySocket[i].config.name != undefined)
                                 ? ArraySocket[i].config.name
                                 : "X"
                        }
                     } else if (DeviceBlockCheck) {
                        let NameBlock = DeviceBlockCheck.querySelector(".DeviceBlockTitle")
                        NameBlock.innerHTML =
                           (ArraySocket[i].config.name != null) & (ArraySocket[i].config.name != undefined)
                              ? ArraySocket[i].config.name
                              : "X"
                     }
                     NavigationMainMenu()
                     if (CurrentSocket) {
                        ChangeTargetTemp()
                        InsertMqtt()
                        if (CurrentSocket.type === "esp8266_thermostat") {
                           DispleyIconSwitch()
                        }
                     }
                  } else {
                     let FirstConfigurationComplete = document.getElementById("FirstConfigurationComplete")
                     FirstConfigurationComplete.classList.add("show")
                  }
               }
            }
         }
      }
      if ("update" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (configActive === 0 && !FirstConfigurate) {
               if (ArraySocket[i].id === SocketItemDevice.id) {
                  if (ArraySocket[i].type != "esp32_panel_4inch") {
                     ArraySocket[i].update = MessageJson.update
                     SetMainDisplay(ArraySocket[i])
                     if (
                        ArraySocket[i].type === "esp8266_thermostat" ||
                        ArraySocket[i].type === "esp8266_thermostat_plus"
                     ) {
                        let MaindisplayHeating = (document
                           .getElementById(ArraySocket[i].id)
                           .querySelector(".HeatingTermostatByID").style.background =
                           ArraySocket[i].update.heating === "off" ? "#1F3C62" : "#035CD0")
                     } else {
                        if (CurrentSocket != null && CurrentSocket.type === "esp8266_air") {
                           UpdateConditioner(CurrentSocket)
                        }
                     }
                     if (CurrentSocket != null) {
                        ChangeTargetTemp()
                        if (
                           CurrentSocket.type === "esp8266_thermostat" ||
                           CurrentSocket.type === "esp8266_thermostat_plus"
                        ) {
                           HeatingRegulate()
                        }
                     }
                  }
               }
            }
         }
      }
      if (MessageJson.update_status != 0) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (ArraySocket[i].id === SocketItemDevice.id) {
               if (MessageJson.update_status < 100) {
                  ProgressUpdate.style.width = MessageJson.update_status + "%"
               } else if (MessageJson.update_status === 100) {
                  SwitchElem(LytkoUpdateBar, LytkoUpdateInformation)
                  SetLoader(5, function () {
                     location.host = location.host
                  })
               }
            }
         }
      }
      if ("mqtt_topics" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (ArraySocket[i].id === SocketItemDevice.id) {
               ArraySocket[i].mqtt_topics = MessageJson.mqtt_topics
            }
         }
      }
      if ("mqtt_topics_1ch" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (ArraySocket[i].id === SocketItemDevice.id) {
               ArraySocket[i].mqtt_topics_1ch = MessageJson.mqtt_topics_1ch
            }
         }
      }
      if ("mqtt_topics_2ch" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (ArraySocket[i].id === SocketItemDevice.id) {
               ArraySocket[i].mqtt_topics_2ch = MessageJson.mqtt_topics_2ch
            }
         }
      }
      if ("zigbee" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (ArraySocket[i].id === SocketItemDevice.id) {
               ArraySocket[i].zigbee = MessageJson.zigbee
            }
         }
      }
      if ("qr_hk" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (ArraySocket[i].id === SocketItemDevice.id) {
               ArraySocket[i].qr_hk = MessageJson.qr_hk
            }
         }
      }
      if ("refresh" in MessageJson) {
         location.host = location.host
      }
      if ("config_1ch" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            ArraySocket[i].config_1ch = MessageJson.config_1ch
            if (ArraySocket[i].id === SocketItemDevice.id && !PanelMenu) {
               NavigationMainMenu()
               if (!configActive) {
                  SocketItemDevice.channel_number = 0
                  let DeviceBlockCheck = document.getElementById(ArraySocket[i].id_for_use_ch1)
                  if (!DeviceBlockCheck) {
                     if (ArraySocket[i].type_1ch != "none") {
                        CreateDeviceBlock(SocketItemDevice, ArraySocket[i].type)
                     }
                  }
               }
            }
         }
      }
      if ("config_2ch" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            ArraySocket[i].config_2ch = MessageJson.config_2ch
            if (ArraySocket[i].id === SocketItemDevice.id && !PanelMenu) {
               NavigationMainMenu()
               if (!configActive) {
                  SocketItemDevice.channel_number = 1
                  let DeviceBlockCheck = document.getElementById(ArraySocket[i].id_for_use_ch2)
                  if (!DeviceBlockCheck) {
                     if (ArraySocket[i].type_2ch != "none") {
                        CreateDeviceBlock(SocketItemDevice, ArraySocket[i].type)
                     }
                  }
               }
            }
         }
      }
      if ("update_1ch" in MessageJson) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (
               (ArraySocket[i].id === SocketItemDevice.id) & !configActive &&
               SocketItemDevice.type === "esp32_panel_4inch"
            ) {
               ArraySocket[i].update_1ch = MessageJson.update_1ch
               ArraySocket[i].channel_number = 0
               let MaindisplayHeating = document.getElementById(ArraySocket[i].id_for_use_ch1)
               if (MaindisplayHeating != null) {
                  MaindisplayHeating.querySelector(".HeatingTermostatByID").style.background =
                     ArraySocket[i].update_1ch.heating === "heat" ? "#035CD0" : "#1F3C62"
               }
               SetMainDisplay(SocketItemDevice)
               if (CurrentSocket != null) {
                  HeatingRegulate()
                  ChangeTargetTemp()
               }
            }
         }
      }
      if ("update_2ch" in MessageJson /* 'update' in MessageJson*/) {
         for (let i = 0; ArraySocket.length > i; i++) {
            if (SocketItemDevice.type_2ch != "none")
               if (
                  (ArraySocket[i].id === SocketItemDevice.id) & !configActive &&
                  SocketItemDevice.type === "esp32_panel_4inch"
               ) {
                  ArraySocket[i].update_2ch = MessageJson.update_2ch
                  ArraySocket[i].channel_number = 1
                  let MaindisplayHeating = document.getElementById(ArraySocket[i].id_for_use_ch2)
                  if (MaindisplayHeating != null) {
                     MaindisplayHeating.querySelector(".HeatingTermostatByID").style.background =
                        ArraySocket[i].update_2ch.heating === "heat" ? "#035CD0" : "#1F3C62"
                  }
                  SetMainDisplay(SocketItemDevice)
                  if (CurrentSocket != null) {
                     HeatingRegulate()
                     ChangeTargetTemp()
                  }
               }
         }
      }
      if ("loading" in MessageJson) {
         if (MessageJson.loading) SetLoader(999, null)
         else SetLoader(1, null)
      }
      if ("mqtt_data" in MessageJson) {
         if (MessageJson.mqtt_data != undefined) {
            SensorsLine.style.display = "flex"
            for (let i = 0; 4 > i; i++) {
               if (MessageJson.mqtt_data[i] != undefined) {
                  let CurrentSensorArray = new Array()
                  for (let index = 0; MessageJson.mqtt_data[i].type.length > index; index++) {
                     CurrentSensorArray.push({
                        type: MessageJson.mqtt_data[i].type[index],
                        unit: MessageJson.mqtt_data[i].unit[index],
                        data: MessageJson.mqtt_data[i].data[index],
                        ShotAddr: MessageJson.mqtt_data[i].ShotAddr,
                        id: MessageJson.mqtt_data[i].type[index] + MessageJson.mqtt_data[i].ShotAddr + i,
                     })
                  }
                  for (let indexCurrentArray = 0; CurrentSensorArray.length > indexCurrentArray; indexCurrentArray++) {
                     let CompleteChecked = CreateSensorBlockOrFalse(CurrentSensorArray[indexCurrentArray])
                     if (!CompleteChecked) {
                        UpdateSensorValue(CurrentSensorArray[indexCurrentArray])
                     }
                  }
               }
            }
         }
      }
      if ("zigbee_data" in MessageJson) {
         if ((MessageJson.zigbee_data != undefined) & (MessageJson.zigbee_data != "{}") & (configActive === 0)) {
            let ZigBeeSensor
            SensorsLine.style.display = "flex"
            let NumberSensor = 1
            for (let i = 0; 5 > i; i++) {
               if (MessageJson.zigbee_data[i] != undefined) {
                  let CurrentSensorArray = new Array()
                  for (let index = 0; MessageJson.zigbee_data[i].type.length > index; index++) {
                     ZigBeeSensor = {
                        type: MessageJson.zigbee_data[i].type[index],
                        unit: MessageJson.zigbee_data[i].unit[index],
                        data: MessageJson.zigbee_data[i].data[index],
                        ShotAddr: MessageJson.zigbee_data[i].ShotAddr,
                        id: MessageJson.zigbee_data[i].type[index] + MessageJson.zigbee_data[i].ShotAddr + i,
                     }
                     CurrentSensorArray.push(ZigBeeSensor)
                     if (ZigBeeSensor.type === "sensor_temp") {
                        CreateZigBeeBlockSensorTemp(ZigBeeSensor, NumberSensor)
                        NumberSensor++
                     }
                  }
                  for (let indexCurrentArray = 0; CurrentSensorArray.length > indexCurrentArray; indexCurrentArray++) {
                     let CompleteChecked = CreateSensorBlockOrFalse(CurrentSensorArray[indexCurrentArray])
                     if (!CompleteChecked) {
                        UpdateSensorValue(CurrentSensorArray[indexCurrentArray])
                     }
                  }
               }
            }
         }
      }
   }
}
var SensorIconArray = {
   sensor_temp:
      '<svg width="8" height="16" viewBox="0 0 8 16" fill="none"><path fill- rule="evenodd" clip - rule="evenodd" d = "M6.4 2.4V8.8C7.368 9.528 8 10.696 8 12C8 14.208 6.208 16 4 16C1.792 16 0 14.208 0 12C0 10.696 0.632002 9.528 1.6 8.8V2.4C1.6 1.072 2.672 0 4 0C5.328 0 6.4 1.072 6.4 2.4ZM4 1.6C3.56 1.6 3.2 1.96 3.2 2.4V9.82649C2.33468 10.139 1.71429 10.9868 1.71429 11.9837C1.71429 13.246 2.70921 14.2694 3.93651 14.2694C5.16381 14.2694 6.15873 13.246 6.15873 11.9837C6.15873 11.0363 5.59838 10.2236 4.8 9.87693V2.4C4.8 1.96 4.44 1.6 4 1.6Z" fill = "white" /></svg>',
   sensor_hum:
      '<svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M4 2.29256C4.27207 2.72351 4.57365 3.22459 4.87456 3.76937C5.86639 5.56497 6.71429 7.59677 6.71429 9.13396C6.71429 10.4178 6.38173 11.3173 5.9272 11.8702C5.49538 12.3955 4.87048 12.7143 4 12.7143C3.12952 12.7143 2.50462 12.3955 2.0728 11.8702C1.61827 11.3173 1.28571 10.4178 1.28571 9.13396C1.28571 7.59677 2.13361 5.56497 3.12544 3.76937C3.42636 3.22459 3.72792 2.72351 4 2.29256Z" stroke="white" stroke- width="2.57143" /></svg >',
}
function CreateSensorBlockOrFalse(Sensor) {
   let ExistSensorBlockCheck = document.getElementById(Sensor.id)
   if (ExistSensorBlockCheck === null) {
      let SensorBlock = document.createElement("div")
      let SensorIcon = document.createElement("div")
      let SensorValue = document.createElement("div")
      let Icon = SensorIconArray[Sensor.type]
      let TypeTemp = Sensor.unit === "Celsius" ? "°" : "%"
      SensorBlock.className = "SensorsBlock"
      SensorBlock.id = Sensor.id
      SensorIcon.className = "SensorIcon"
      SensorValue.className = "SensorValue"
      SensorIcon.innerHTML = Icon
      SensorValue.innerHTML = Sensor.data + TypeTemp
      SensorBlock.append(SensorIcon)
      SensorBlock.append(SensorValue)
      SensorsLine.append(SensorBlock)
      return true
   } else return false
}
function UpdateSensorValue(Sensor) {
   let GetSensorBlock = document.getElementById(Sensor.id)
   if (GetSensorBlock != null) {
      let ValueSensorBlock = GetSensorBlock.querySelector(".SensorValue")
      let TypeTemp = Sensor.unit === "Celsius" ? "°" : "%"
      ValueSensorBlock.innerHTML = Sensor.data + TypeTemp
   }
}
function SetMainDisplay(Socket) {
   let BlockId =
      Socket.type === "esp32_panel_4inch"
         ? Socket.channel_number === 0
            ? Socket.id_for_use_ch1
            : Socket.id_for_use_ch2
         : Socket.id
   let MainDisplayBlock = document.getElementById(BlockId)
   let MainDisplayValue = MainDisplayBlock.querySelectorAll(".DeviceBlockValue")[0]
   if (Socket.type === "esp32_panel_4inch") {
      MainDisplayValue.innerHTML =
         Socket.channel_number === 0 ? Socket.update_1ch.temp + "°C" : Socket.update_2ch.temp + "°C"
   } else MainDisplayValue.innerHTML = Socket.update.temp + "°C"
   let AutoHandlerConditioner = MainDisplayBlock.querySelector(".AutoConditionerMainDisplay")
   let FanHandlerMainDisplay = MainDisplayBlock.querySelector(".FanHandlerMainDisplay")
   if (AutoHandlerConditioner != null) {
      switch (Socket.update.heating) {
         case "auto":
            AutoHandlerConditioner.innerHTML = "Auto"
            AutoHandlerConditioner.style.background = "rgb(3, 92, 208)"
            break
         case "heat":
            AutoHandlerConditioner.innerHTML =
               '<svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d = "M14.86 10.2339C13.4205 6.38701 8.29518 6.17958 9.53296 0.588392C9.62465 0.173531 9.19372 -0.147043 8.8453 0.069816C5.51703 2.08755 3.12398 6.13244 5.13194 11.4313C5.29698 11.8651 4.80187 12.2705 4.44429 11.9876C2.78474 10.6959 2.61053 8.83846 2.75723 7.50902C2.81224 7.01873 2.18877 6.78302 1.92287 7.18845C1.29939 8.16903 0.666748 9.75304 0.666748 12.1385C1.01516 17.4185 5.352 19.0403 6.91069 19.2477C9.1387 19.54 11.5501 19.1157 13.283 17.4845C15.1901 15.6648 15.8869 12.7608 14.86 10.2339ZM6.35139 14.9765C7.6717 14.6465 8.35019 13.6659 8.53356 12.7985C8.83613 11.4502 7.65336 10.1302 8.45104 7.99931C8.75361 9.76247 11.4492 10.8656 11.4492 12.7891C11.5226 15.1745 9.01034 17.2205 6.35139 14.9765Z" fill = "white" /></svg >'
            AutoHandlerConditioner.style.background = "rgb(3, 92, 208)"
            break
         case "cool":
            AutoHandlerConditioner.innerHTML =
               '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8.6255 0.0316609C8.34495 0.124023 8.13467 0.357289 8.07486 0.64243C8.06015 0.712637 8.0481 0.9961 8.0481 1.27233C8.0481 1.54857 8.03927 1.77458 8.02844 1.77458C8.01763 1.77458 7.76191 1.6306 7.46016 1.45465C7.15843 1.27868 6.87085 1.12691 6.82108 1.11736C6.42431 1.04124 6.02256 1.17434 5.84835 1.43963C5.74805 1.59236 5.71811 1.7267 5.73048 1.96823C5.74302 2.21338 5.82139 2.41127 5.96058 2.54921C6.01486 2.60299 6.45332 2.86092 7.04363 3.18629L8.03548 3.73302L8.04192 6.08469C8.04548 7.37814 8.04409 8.43639 8.03889 8.43639C8.02932 8.43639 7.79518 8.30251 6.65953 7.64769C6.31933 7.45152 5.73424 7.11477 5.35932 6.89937C4.98441 6.68394 4.53333 6.42403 4.35693 6.32178L4.03619 6.13587L4.02809 4.92995C4.01875 3.54187 4.02241 3.56694 3.79511 3.33447C3.60965 3.14482 3.43739 3.08287 3.13761 3.09806C2.86724 3.11174 2.72018 3.16979 2.57218 3.32115C2.38771 3.50982 2.36142 3.59338 2.33974 4.05973C2.32918 4.28696 2.32575 4.62103 2.33211 4.80209C2.33994 5.02513 2.33499 5.1313 2.31679 5.1313C2.30199 5.1313 2.06594 5.00398 1.79224 4.84833C1.37577 4.61153 1.26771 4.56107 1.12979 4.53892C0.694306 4.46897 0.272811 4.68607 0.15448 5.04129C0.0926758 5.22676 0.117089 5.59598 0.202348 5.76542C0.306011 5.97147 0.382407 6.03493 0.85278 6.30554C1.09578 6.44536 1.31421 6.5733 1.3382 6.58988C1.37551 6.61567 1.31237 6.66055 0.89989 6.90136C0.399651 7.19337 0.281572 7.29234 0.162205 7.51974C0.117089 7.6057 0.108 7.66633 0.108051 7.88124C0.108101 8.12129 0.113757 8.15053 0.188563 8.29698C0.337822 8.5892 0.495488 8.72235 0.750934 8.7719C0.950787 8.81066 1.06518 8.77041 1.22146 8.60639C1.32835 8.49418 1.47867 8.40057 2.10509 8.05617C2.52023 7.82794 2.89511 7.62047 2.93819 7.59512L3.01645 7.54905L3.2159 7.66651C3.4465 7.80235 3.45514 7.80734 5.15735 8.78678C5.86552 9.19426 6.61833 9.62668 6.83025 9.74773C7.04217 9.86878 7.21254 9.9709 7.20888 9.97467C7.19759 9.98619 6.21216 10.5545 4.81652 11.3544C4.69849 11.422 4.52807 11.5207 4.43782 11.5736C4.29177 11.6593 4.04632 11.8002 3.39604 12.1717C3.28823 12.2333 3.18677 12.2837 3.17053 12.2837C3.15432 12.2837 2.99825 12.2036 2.82374 12.1057C1.80589 11.5345 1.2081 11.2182 1.08396 11.1851C0.920037 11.1414 0.628639 11.1363 0.493645 11.1746C0.0807088 11.2919 -0.128259 11.9096 0.084218 12.3848C0.190886 12.6233 0.221106 12.6479 0.878026 13.0326C1.07937 13.1504 1.27551 13.2662 1.31389 13.2897L1.38364 13.3326L0.985679 13.5622C0.766789 13.6885 0.535201 13.842 0.471049 13.9032C0.205099 14.157 0.132364 14.5533 0.288994 14.8948C0.387255 15.109 0.522123 15.2634 0.687085 15.3504C0.791152 15.4053 0.850103 15.4179 1.00426 15.4182C1.22017 15.4187 1.3177 15.3777 1.88603 15.0479C2.05856 14.9477 2.20343 14.8658 2.20792 14.8658C2.21242 14.8658 2.2161 15.1368 2.2161 15.4679C2.2161 16.1276 2.23163 16.2304 2.36314 16.4425C2.44418 16.5732 2.62583 16.7091 2.78267 16.7566C2.83902 16.7736 2.97603 16.7876 3.08712 16.7876C3.25082 16.7876 3.31563 16.7751 3.42911 16.7214C3.67398 16.6055 3.84134 16.4119 3.96656 16.0996C4.01885 15.9692 4.0218 15.9157 4.03387 14.8829L4.04649 13.8026L4.65241 13.4538C4.98567 13.262 5.62189 12.8954 6.06623 12.6393C7.81237 11.6326 8.02798 11.5091 8.03853 11.5091C8.04381 11.5091 8.04798 12.581 8.0478 13.8911L8.0475 16.2731L7.82886 16.3892C7.70858 16.4532 7.31393 16.6697 6.95181 16.8704C6.23364 17.2686 6.11708 17.3588 6.00539 17.6023C5.91803 17.7928 5.91425 18.119 5.99723 18.306C6.06944 18.4688 6.2371 18.6357 6.42105 18.7281C6.55155 18.7936 6.59922 18.8035 6.78576 18.803C7.03652 18.8025 7.10438 18.7744 7.68202 18.4324L8.03548 18.2231L8.04853 18.7973C8.06103 19.3476 8.06431 19.3776 8.1273 19.5158C8.30852 19.9136 8.73966 20.0917 9.18741 19.9538C9.34907 19.904 9.39247 19.8767 9.51734 19.7462C9.72848 19.5255 9.74592 19.4458 9.74754 18.6949C9.74827 18.3641 9.75556 18.0934 9.76374 18.0934C9.81083 18.0934 10.7146 18.6499 10.7858 18.7227C10.8904 18.8297 11.0711 18.8809 11.2534 18.8553C11.3878 18.8364 11.7033 18.6856 11.9582 18.5183C12.0957 18.428 12.1181 18.4014 12.1512 18.2888C12.2072 18.0981 12.1997 17.7901 12.1347 17.6124C12.0354 17.3409 11.9822 17.302 10.8826 16.6966C10.3305 16.3926 9.84956 16.129 9.81376 16.1107L9.74867 16.0774L9.74837 13.7538C9.74822 12.4758 9.75549 11.4334 9.7645 11.4374C9.77975 11.444 11.6913 12.5442 13.2111 13.4209L13.8675 13.7996L13.8809 14.9718C13.8961 16.2995 13.894 16.2846 14.0982 16.5169C14.4283 16.8923 15.0121 16.8926 15.4279 16.5176C15.4947 16.4573 15.5826 16.3487 15.6233 16.276L15.6974 16.1439L15.6976 15.5049C15.6978 15.1534 15.7036 14.8658 15.7107 14.8658C15.755 14.8658 16.331 15.224 16.3968 15.2926C16.647 15.5529 17.2613 15.4265 17.5367 15.0581C17.7675 14.7492 17.7296 14.1826 17.4596 13.9065C17.3704 13.8153 17.3409 13.7962 16.9039 13.547C16.7688 13.47 16.6581 13.3993 16.6578 13.39C16.6575 13.3807 16.8627 13.2529 17.1139 13.106C17.617 12.8116 17.7654 12.6852 17.8669 12.4645C17.9216 12.3455 17.932 12.2869 17.931 12.103C17.9294 11.8306 17.8724 11.6884 17.693 11.5097C17.4251 11.2428 16.997 11.1795 16.6678 11.358C16.356 11.5271 16.0713 11.683 15.4871 12.0043C15.0505 12.2445 14.8249 12.3553 14.8054 12.3392C14.7894 12.326 14.4412 12.1236 14.0316 11.8895C13.622 11.6555 12.7983 11.1823 12.2012 10.838C11.6041 10.4937 11.0225 10.1585 10.9088 10.093C10.795 10.0276 10.7042 9.97194 10.7068 9.96941C10.7112 9.96525 12.6272 8.86063 13.0722 8.60572C13.8524 8.15881 14.1822 7.96911 14.4274 7.82621C14.5826 7.73576 14.7233 7.66176 14.7399 7.66176C14.7648 7.66176 15.2471 7.91762 15.7357 8.18995C15.7913 8.22091 15.9617 8.314 16.1144 8.39683C16.2672 8.47966 16.4319 8.58499 16.4805 8.63087C16.6208 8.76331 16.6754 8.78226 16.9097 8.77965C17.1719 8.77676 17.3736 8.70666 17.5144 8.56957C17.6377 8.44945 17.6767 8.31353 17.6784 7.99743C17.6796 7.78157 17.6716 7.73509 17.6115 7.61012C17.574 7.53201 17.5002 7.42519 17.4474 7.37274C17.3625 7.28826 16.4511 6.7322 16.3976 6.7322C16.3392 6.7322 16.4491 6.66052 16.9336 6.38259C17.2268 6.21436 17.5098 6.03282 17.5681 5.97544C17.9014 5.64801 17.912 5.09771 17.5914 4.76989C17.5331 4.71024 17.4125 4.62655 17.3235 4.58392C17.1902 4.52015 17.1292 4.50646 16.9788 4.50654C16.739 4.50669 16.656 4.5414 16.0196 4.90738C15.7314 5.07315 15.49 5.20877 15.4831 5.20877C15.4763 5.20877 15.4706 4.91459 15.4706 4.55503C15.4706 3.83398 15.4547 3.72592 15.3209 3.53688C15.1543 3.30173 14.8491 3.17464 14.524 3.20501C14.2193 3.23346 13.995 3.38643 13.8496 3.6648C13.792 3.77524 13.7917 3.78063 13.7845 4.98046C13.779 5.88618 13.7696 6.19141 13.7466 6.2101C13.7298 6.22379 13.4377 6.3947 13.0975 6.5899C12.7573 6.78514 12.3937 6.99431 12.2896 7.05473C12.1854 7.11515 11.7707 7.35405 11.368 7.58561C10.9654 7.81715 10.4383 8.12073 10.1969 8.26024C9.95544 8.39972 9.75377 8.51385 9.74875 8.51385C9.74375 8.51385 9.73963 7.41266 9.73963 6.06677V3.61972L10.3645 3.27723C11.4648 2.67413 11.5176 2.64288 11.6288 2.52917C11.7969 2.35725 11.8717 2.16824 11.8711 1.91659C11.8707 1.74452 11.859 1.68539 11.801 1.56248C11.7229 1.39713 11.5638 1.23957 11.3848 1.15017C11.2436 1.07971 10.9569 1.05688 10.7812 1.10212C10.7162 1.11888 10.466 1.24798 10.2252 1.38902C9.98445 1.53008 9.77672 1.64547 9.76354 1.64547C9.74933 1.64547 9.73963 1.44768 9.73963 1.15784C9.73963 0.770012 9.73087 0.642482 9.69684 0.534705C9.63958 0.353365 9.4546 0.147391 9.28002 0.0705732C9.10953 -0.00443678 8.7924 -0.0232861 8.6255 0.0316609Z" fill="white" /></svg>'
            AutoHandlerConditioner.style.background = "rgb(3, 92, 208)"
            break
         case "off":
            AutoHandlerConditioner.innerHTML = "Auto"
            AutoHandlerConditioner.style.background = "rgb(31, 60, 98)"
            break
      }
   }
   if (FanHandlerMainDisplay != null) FanHandlerMainDisplay.innerHTML = FanIconsArray[Socket.update.fan_speed]
}
function SearchByHtmlCollectionByIdOrNull(Collection, Id) {
   for (indexCollection = 0; Collection.length > indexCollection; indexCollection++) {
      if (Collection[indexCollection].id === Id) return Collection[indexCollection]
   }
   return null
}
function ShowMainMenuBySocket(Socket) {
   ChangeTargetTemp()
   TabloTempInitialization()
   HeatingRegulate()
   InsertTemp()
   ShowWifiList(ArraySocket[0].wifi_networks)
   ShowWifiConnectMarker()
   PairHk()
   UpdateSet()
   NavigationDevice()
   ConnectInnerSensor()
   InsertExternalInnerSensor()
   MainMenuWidgetBtn()
   SetUpdateInformation()
   InsertMqtt()
   if (Socket.type === "esp8266_air") {
      UpdateConditioner(Socket)
      ConditionerHandlers()
      InsertConditionerBrand()
      let Title = MainDisplayConditioner.querySelector(".StandartMenuTitle")
      Title.innerHTML = (Socket.config.name != null) & (Socket.config.name != undefined) ? Socket.config.name : "X"
   }
   if (Socket.type === "esp8266_thermostat") {
      DisplaySet()
   }
   if (
      Socket.type === "esp8266_thermostat" ||
      Socket.type === "esp32_panel_4inch" ||
      CurrentSocket.type === "esp8266_thermostat_plus"
   ) {
      let Title = MainDisplayTermostat.querySelector(".StandartMenuTitle")
      Title.innerHTML = (Socket.config.name != null) & (Socket.config.name != undefined) ? Socket.config.name : "X"
      InsertSensors()
      if (Socket.type === "esp32_panel_4inch") {
         ZigBeeSet()
      }
   }
   DropSettings.onclick = function () {
      CurrentSocket.Socket.send(JSON.stringify("reset"))
      SetLoader(5, function () {
         window.close()
      })
   }
   let NameChangeIcon = document.getElementById("NameChangeIcon")
   InputName.onclick = ShowIcon
   function ShowIcon() {
      NameChangeIcon.style.display = "block"
   }
   NameChangeIcon.onclick = function () {
      NameChangeIcon.style.display = "none"
      CurrentSocket.Socket.send(JSON.stringify({ config: { name: InputName.value } }))
   }
   let ArrowsTemp = TempStageSetting.querySelectorAll(".ArrowTemp")
   ArrowsTemp.forEach((item) => (item.style.display = "none"))
}
function DisplaySet() {
   DispleyIconSwitch()
   DispleySelect.onclick = function () {
      if ((CurrentSocket.config.nex_bl != null) & (CurrentSocket.config.nex_bl != undefined)) {
         if (CurrentSocket.config.nex_bl === "0") {
            CurrentSocket.Socket.send(JSON.stringify({ config: { nex_bl: 100 } }))
         } else if (CurrentSocket.config.nex_bl === "100") {
            CurrentSocket.Socket.send(JSON.stringify({ config: { nex_bl: 0 } }))
         }
      }
   }
}
function DispleyIconSwitch() {
   let DispleySelectIcon = DispleySelect.querySelector(".SelectedIcon")
   if ((CurrentSocket.config.nex_bl != null) & (CurrentSocket.config.nex_bl != undefined)) {
      if (CurrentSocket.config.nex_bl === "0") {
         DispleySelectIcon.style.display = "flex"
      } else if (CurrentSocket.config.nex_bl === "100") {
         DispleySelectIcon.style.display = "none"
      }
   }
}
function ShowWifiConnectMarker() {
   if (!FirstConfigurate) {
      if (CurrentSocket.config.wifi_name != "") {
         document.getElementsByClassName("WifiConnect")[0].innerHTML = CurrentSocket.config.wifi_name
         document.getElementsByClassName("WifiConnect")[0].style.display = "flex"
      } else {
         document.getElementsByClassName("WifiConnect")[0].style.display = "none"
      }
   }
}
function SetUpdateInformation() {
   let CurrentVersion = LytkoUpdateInformation.querySelector(".CurrentVersion")
   let AccessVersion = LytkoUpdateInformation.querySelector(".AccessVersion")
   let IdDevice = LytkoUpdateInformation.querySelector(".IdDevice")
   CurrentVersion.innerHTML = "Текущая версия " + CurrentSocket.config.version
   if (CurrentSocket.config.link != "")
      AccessVersion.innerHTML = "Доступно обновление " + CurrentSocket.config.version_new
   IdDevice.innerHTML = "Id устройства " + CurrentSocket.id
}
function NavigationMainMenu() {
   AccountIcon.onclick = function () {
      SwitchElem(MainDisplay, AccountSettings)
   }
   AliceLink.onclick = function () {
      SwitchElem(AccountSettings, AlicePage)
   }
   RestorePass.onclick = function () {
      window.location.href = "https://oauth.lytko.com/restore"
   }
   Registration.onclick = function () {
      window.location.href = " https://oauth.lytko.com/reg"
   }
   BackToMainDisplay.forEach((item) => (item.onclick = NavMainDisplay))
   BackToAccountSetting.onclick = function () {
      SwitchElem(AlicePage, AccountSettings)
   }
   InDevelopFunction.forEach((item) => (item.onclick = ShowInDevelop))
   AliceSet()
}
function MainMenuWidgetBtn() {
   MainMenuWidgetArrowUp.forEach(
      (item) =>
         (item.onclick = function () {
            if (CurrentSocket.type === "esp32_panel_4inch") {
               if (!CurrentSocket.active_channel)
                  CurrentSocket.Socket.send(JSON.stringify({ update_1ch: { tempUp: 1 } }))
               else CurrentSocket.Socket.send(JSON.stringify({ update_2ch: { tempUp: 1 } }))
            } else CurrentSocket.Socket.send(JSON.stringify("tempUp"))
         })
   )
   MainMenuWidgetArrowDown.forEach(
      (item) =>
         (item.onclick = function () {
            if (CurrentSocket.type === "esp32_panel_4inch") {
               if (!CurrentSocket.active_channel)
                  CurrentSocket.Socket.send(JSON.stringify({ update_1ch: { tempDown: 1 } }))
               else CurrentSocket.Socket.send(JSON.stringify({ update_2ch: { tempDown: 1 } }))
            } else CurrentSocket.Socket.send(JSON.stringify("tempDown"))
         })
   )
}
function ConditionerHandlers() {
   AutoTempHandler.forEach(
      (item) =>
         (item.onclick = function () {
            RegulateConditionerHeating("auto", 3)
         })
   )
   HeatingTempHandler.onclick = function () {
      RegulateConditionerHeating("heat", 1)
   }
   CoolTempHandler.onclick = function () {
      RegulateConditionerHeating("cool ", 2)
   }
   FanHandler.onchange = function () {
      let dataFan = Math.ceil(FanHandler.value / 20)
      CurrentSocket.Socket.send(
         JSON.stringify({
            fan_speed: dataFan,
         })
      )
   }
}
function RegulateConditionerHeating(CaseHeating, Number) {
   if (CurrentSocket != null) {
      let dataForSocket = CurrentSocket.update.heating === CaseHeating ? "0" : Number
      CurrentSocket.Socket.send(
         JSON.stringify({
            heating: dataForSocket,
         })
      )
   }
}
function UpdateConditioner(Socket) {
   let FanSpeedArray = {
      0: "0",
      1: "20",
      2: "40",
      3: "60",
      4: "80",
      5: "100",
   }
   let ConditionerTempValueFirst = document.getElementById("ConditionerTempValueFirst")
   let ConditionerTempValue = document.getElementById("ConditionerTempValue")
   if ((Socket.config.is_target_temp_first != null) & (Socket.config.is_target_temp_first != undefined)) {
      if (Socket.config.is_target_temp_first) {
         ConditionerTempValueFirst.innerHTML = Socket.update.target_temp
         ConditionerTempValue.innerHTML = Socket.update.temp
      } else {
         ConditionerTempValueFirst.innerHTML = Socket.update.temp
         ConditionerTempValue.innerHTML = Socket.update.target_temp
      }
   }
   let DeviceBlockThisConditiner = document.getElementById(Socket.id)
   let AutoHeatingMainDisplay = DeviceBlockThisConditiner.querySelector(".AutoConditionerMainDisplay")
   switch (Socket.update.heating) {
      case "auto":
         AutoHeatingMainDisplay.innerHTML = "Auto"
         break
      case "heat":
         AutoHeatingMainDisplay.innerHTML =
            '<svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d = "M14.86 10.2339C13.4205 6.38701 8.29518 6.17958 9.53296 0.588392C9.62465 0.173531 9.19372 -0.147043 8.8453 0.069816C5.51703 2.08755 3.12398 6.13244 5.13194 11.4313C5.29698 11.8651 4.80187 12.2705 4.44429 11.9876C2.78474 10.6959 2.61053 8.83846 2.75723 7.50902C2.81224 7.01873 2.18877 6.78302 1.92287 7.18845C1.29939 8.16903 0.666748 9.75304 0.666748 12.1385C1.01516 17.4185 5.352 19.0403 6.91069 19.2477C9.1387 19.54 11.5501 19.1157 13.283 17.4845C15.1901 15.6648 15.8869 12.7608 14.86 10.2339ZM6.35139 14.9765C7.6717 14.6465 8.35019 13.6659 8.53356 12.7985C8.83613 11.4502 7.65336 10.1302 8.45104 7.99931C8.75361 9.76247 11.4492 10.8656 11.4492 12.7891C11.5226 15.1745 9.01034 17.2205 6.35139 14.9765Z" fill = "white" /></svg >'
         break
      case "cool":
         AutoHeatingMainDisplay.innerHTML =
            '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M8.6255 0.0316609C8.34495 0.124023 8.13467 0.357289 8.07486 0.64243C8.06015 0.712637 8.0481 0.9961 8.0481 1.27233C8.0481 1.54857 8.03927 1.77458 8.02844 1.77458C8.01763 1.77458 7.76191 1.6306 7.46016 1.45465C7.15843 1.27868 6.87085 1.12691 6.82108 1.11736C6.42431 1.04124 6.02256 1.17434 5.84835 1.43963C5.74805 1.59236 5.71811 1.7267 5.73048 1.96823C5.74302 2.21338 5.82139 2.41127 5.96058 2.54921C6.01486 2.60299 6.45332 2.86092 7.04363 3.18629L8.03548 3.73302L8.04192 6.08469C8.04548 7.37814 8.04409 8.43639 8.03889 8.43639C8.02932 8.43639 7.79518 8.30251 6.65953 7.64769C6.31933 7.45152 5.73424 7.11477 5.35932 6.89937C4.98441 6.68394 4.53333 6.42403 4.35693 6.32178L4.03619 6.13587L4.02809 4.92995C4.01875 3.54187 4.02241 3.56694 3.79511 3.33447C3.60965 3.14482 3.43739 3.08287 3.13761 3.09806C2.86724 3.11174 2.72018 3.16979 2.57218 3.32115C2.38771 3.50982 2.36142 3.59338 2.33974 4.05973C2.32918 4.28696 2.32575 4.62103 2.33211 4.80209C2.33994 5.02513 2.33499 5.1313 2.31679 5.1313C2.30199 5.1313 2.06594 5.00398 1.79224 4.84833C1.37577 4.61153 1.26771 4.56107 1.12979 4.53892C0.694306 4.46897 0.272811 4.68607 0.15448 5.04129C0.0926758 5.22676 0.117089 5.59598 0.202348 5.76542C0.306011 5.97147 0.382407 6.03493 0.85278 6.30554C1.09578 6.44536 1.31421 6.5733 1.3382 6.58988C1.37551 6.61567 1.31237 6.66055 0.89989 6.90136C0.399651 7.19337 0.281572 7.29234 0.162205 7.51974C0.117089 7.6057 0.108 7.66633 0.108051 7.88124C0.108101 8.12129 0.113757 8.15053 0.188563 8.29698C0.337822 8.5892 0.495488 8.72235 0.750934 8.7719C0.950787 8.81066 1.06518 8.77041 1.22146 8.60639C1.32835 8.49418 1.47867 8.40057 2.10509 8.05617C2.52023 7.82794 2.89511 7.62047 2.93819 7.59512L3.01645 7.54905L3.2159 7.66651C3.4465 7.80235 3.45514 7.80734 5.15735 8.78678C5.86552 9.19426 6.61833 9.62668 6.83025 9.74773C7.04217 9.86878 7.21254 9.9709 7.20888 9.97467C7.19759 9.98619 6.21216 10.5545 4.81652 11.3544C4.69849 11.422 4.52807 11.5207 4.43782 11.5736C4.29177 11.6593 4.04632 11.8002 3.39604 12.1717C3.28823 12.2333 3.18677 12.2837 3.17053 12.2837C3.15432 12.2837 2.99825 12.2036 2.82374 12.1057C1.80589 11.5345 1.2081 11.2182 1.08396 11.1851C0.920037 11.1414 0.628639 11.1363 0.493645 11.1746C0.0807088 11.2919 -0.128259 11.9096 0.084218 12.3848C0.190886 12.6233 0.221106 12.6479 0.878026 13.0326C1.07937 13.1504 1.27551 13.2662 1.31389 13.2897L1.38364 13.3326L0.985679 13.5622C0.766789 13.6885 0.535201 13.842 0.471049 13.9032C0.205099 14.157 0.132364 14.5533 0.288994 14.8948C0.387255 15.109 0.522123 15.2634 0.687085 15.3504C0.791152 15.4053 0.850103 15.4179 1.00426 15.4182C1.22017 15.4187 1.3177 15.3777 1.88603 15.0479C2.05856 14.9477 2.20343 14.8658 2.20792 14.8658C2.21242 14.8658 2.2161 15.1368 2.2161 15.4679C2.2161 16.1276 2.23163 16.2304 2.36314 16.4425C2.44418 16.5732 2.62583 16.7091 2.78267 16.7566C2.83902 16.7736 2.97603 16.7876 3.08712 16.7876C3.25082 16.7876 3.31563 16.7751 3.42911 16.7214C3.67398 16.6055 3.84134 16.4119 3.96656 16.0996C4.01885 15.9692 4.0218 15.9157 4.03387 14.8829L4.04649 13.8026L4.65241 13.4538C4.98567 13.262 5.62189 12.8954 6.06623 12.6393C7.81237 11.6326 8.02798 11.5091 8.03853 11.5091C8.04381 11.5091 8.04798 12.581 8.0478 13.8911L8.0475 16.2731L7.82886 16.3892C7.70858 16.4532 7.31393 16.6697 6.95181 16.8704C6.23364 17.2686 6.11708 17.3588 6.00539 17.6023C5.91803 17.7928 5.91425 18.119 5.99723 18.306C6.06944 18.4688 6.2371 18.6357 6.42105 18.7281C6.55155 18.7936 6.59922 18.8035 6.78576 18.803C7.03652 18.8025 7.10438 18.7744 7.68202 18.4324L8.03548 18.2231L8.04853 18.7973C8.06103 19.3476 8.06431 19.3776 8.1273 19.5158C8.30852 19.9136 8.73966 20.0917 9.18741 19.9538C9.34907 19.904 9.39247 19.8767 9.51734 19.7462C9.72848 19.5255 9.74592 19.4458 9.74754 18.6949C9.74827 18.3641 9.75556 18.0934 9.76374 18.0934C9.81083 18.0934 10.7146 18.6499 10.7858 18.7227C10.8904 18.8297 11.0711 18.8809 11.2534 18.8553C11.3878 18.8364 11.7033 18.6856 11.9582 18.5183C12.0957 18.428 12.1181 18.4014 12.1512 18.2888C12.2072 18.0981 12.1997 17.7901 12.1347 17.6124C12.0354 17.3409 11.9822 17.302 10.8826 16.6966C10.3305 16.3926 9.84956 16.129 9.81376 16.1107L9.74867 16.0774L9.74837 13.7538C9.74822 12.4758 9.75549 11.4334 9.7645 11.4374C9.77975 11.444 11.6913 12.5442 13.2111 13.4209L13.8675 13.7996L13.8809 14.9718C13.8961 16.2995 13.894 16.2846 14.0982 16.5169C14.4283 16.8923 15.0121 16.8926 15.4279 16.5176C15.4947 16.4573 15.5826 16.3487 15.6233 16.276L15.6974 16.1439L15.6976 15.5049C15.6978 15.1534 15.7036 14.8658 15.7107 14.8658C15.755 14.8658 16.331 15.224 16.3968 15.2926C16.647 15.5529 17.2613 15.4265 17.5367 15.0581C17.7675 14.7492 17.7296 14.1826 17.4596 13.9065C17.3704 13.8153 17.3409 13.7962 16.9039 13.547C16.7688 13.47 16.6581 13.3993 16.6578 13.39C16.6575 13.3807 16.8627 13.2529 17.1139 13.106C17.617 12.8116 17.7654 12.6852 17.8669 12.4645C17.9216 12.3455 17.932 12.2869 17.931 12.103C17.9294 11.8306 17.8724 11.6884 17.693 11.5097C17.4251 11.2428 16.997 11.1795 16.6678 11.358C16.356 11.5271 16.0713 11.683 15.4871 12.0043C15.0505 12.2445 14.8249 12.3553 14.8054 12.3392C14.7894 12.326 14.4412 12.1236 14.0316 11.8895C13.622 11.6555 12.7983 11.1823 12.2012 10.838C11.6041 10.4937 11.0225 10.1585 10.9088 10.093C10.795 10.0276 10.7042 9.97194 10.7068 9.96941C10.7112 9.96525 12.6272 8.86063 13.0722 8.60572C13.8524 8.15881 14.1822 7.96911 14.4274 7.82621C14.5826 7.73576 14.7233 7.66176 14.7399 7.66176C14.7648 7.66176 15.2471 7.91762 15.7357 8.18995C15.7913 8.22091 15.9617 8.314 16.1144 8.39683C16.2672 8.47966 16.4319 8.58499 16.4805 8.63087C16.6208 8.76331 16.6754 8.78226 16.9097 8.77965C17.1719 8.77676 17.3736 8.70666 17.5144 8.56957C17.6377 8.44945 17.6767 8.31353 17.6784 7.99743C17.6796 7.78157 17.6716 7.73509 17.6115 7.61012C17.574 7.53201 17.5002 7.42519 17.4474 7.37274C17.3625 7.28826 16.4511 6.7322 16.3976 6.7322C16.3392 6.7322 16.4491 6.66052 16.9336 6.38259C17.2268 6.21436 17.5098 6.03282 17.5681 5.97544C17.9014 5.64801 17.912 5.09771 17.5914 4.76989C17.5331 4.71024 17.4125 4.62655 17.3235 4.58392C17.1902 4.52015 17.1292 4.50646 16.9788 4.50654C16.739 4.50669 16.656 4.5414 16.0196 4.90738C15.7314 5.07315 15.49 5.20877 15.4831 5.20877C15.4763 5.20877 15.4706 4.91459 15.4706 4.55503C15.4706 3.83398 15.4547 3.72592 15.3209 3.53688C15.1543 3.30173 14.8491 3.17464 14.524 3.20501C14.2193 3.23346 13.995 3.38643 13.8496 3.6648C13.792 3.77524 13.7917 3.78063 13.7845 4.98046C13.779 5.88618 13.7696 6.19141 13.7466 6.2101C13.7298 6.22379 13.4377 6.3947 13.0975 6.5899C12.7573 6.78514 12.3937 6.99431 12.2896 7.05473C12.1854 7.11515 11.7707 7.35405 11.368 7.58561C10.9654 7.81715 10.4383 8.12073 10.1969 8.26024C9.95544 8.39972 9.75377 8.51385 9.74875 8.51385C9.74375 8.51385 9.73963 7.41266 9.73963 6.06677V3.61972L10.3645 3.27723C11.4648 2.67413 11.5176 2.64288 11.6288 2.52917C11.7969 2.35725 11.8717 2.16824 11.8711 1.91659C11.8707 1.74452 11.859 1.68539 11.801 1.56248C11.7229 1.39713 11.5638 1.23957 11.3848 1.15017C11.2436 1.07971 10.9569 1.05688 10.7812 1.10212C10.7162 1.11888 10.466 1.24798 10.2252 1.38902C9.98445 1.53008 9.77672 1.64547 9.76354 1.64547C9.74933 1.64547 9.73963 1.44768 9.73963 1.15784C9.73963 0.770012 9.73087 0.642482 9.69684 0.534705C9.63958 0.353365 9.4546 0.147391 9.28002 0.0705732C9.10953 -0.00443678 8.7924 -0.0232861 8.6255 0.0316609Z" fill="white" /></svg>'
         break
      case "off":
         AutoHeatingMainDisplay.innerHTML = "Auto"
         break
   }
   AutoTempHandler.forEach((item) =>
      Socket.update.heating === "auto" ? (item.style.background = "#035CD0") : (item.style.background = "#1F3C62")
   )
   HeatingTempHandler.style.background =
      Socket.update.heating === "heat"
         ? (HeatingTempHandler.style.background = "#035CD0")
         : (HeatingTempHandler.style.background = "#1F3C62")
   CoolTempHandler.style.background =
      Socket.update.heating === "cool"
         ? (CoolTempHandler.style.background = "#035CD0")
         : (CoolTempHandler.style.background = "#1F3C62")
   FanHandler.value = FanSpeedArray[Socket.update.fan_speed]
   FanSpeedValue.innerHTML = FanHandler.value + "%"
}
function UpdateSet() {
   let UpdateMarker = document.getElementsByClassName("AvailableUpdate")[0]
   if (CurrentSocket.config.name != "") {
      InputName = document.getElementById("NameInput")
      InputName.value =
         (CurrentSocket.config.name != null) & (CurrentSocket.config.name != undefined)
            ? CurrentSocket.config.name
            : "X"
   }
   if (CurrentSocket.config.link != "") {
      UpdateMarker.style.display = "flex"
      UpdateLytkoBtn.removeAttribute("disabled")
      UpdateLytkoBtn.style.background = "#035CD0"
   } else {
      UpdateMarker.style.display = "none"
      UpdateLytkoBtn.setAttribute("disabled", "disabled")
      UpdateLytkoBtn.style.background = "#1F3C62"
   }
   ChooseUpdateFileBtn.onclick = function () {
      window.location.href = "//" + CurrentSocket.ip + "/manual_update"
   }
   let UpdateDisplayBtn = document.getElementById("UpdateDisplayBtn")
   if (CurrentSocket.type === "esp8266_thermostat_plus") {
      if (
         (CurrentSocket.config.dwin_link != undefined) &
         (CurrentSocket.config.dwin_link != null) &
         (CurrentSocket.config.dwin_link != "{}")
      ) {
         UpdateDispleyBlock.style.display = "block"
         UpdateDisplayBtn.removeAttribute("disabled")
         UpdateDisplayBtn.style.background = "#035CD0"
      } else {
         UpdateDispleyBlock.style.display = "block"
         UpdateDisplayBtn.setAttribute("disabled", "disabled")
         UpdateDisplayBtn.style.background = "#1F3C62"
      }
   } else {
      UpdateDispleyBlock.style.display = "none"
   }
   UpdateDisplayBtn.onclick = function () {
      CurrentSocket.Socket.send(
         JSON.stringify({
            files: {
               dwin_link: config.dwin_link,
            },
         })
      )
   }
   UpdateLytkoBtn.onclick = function () {
      let HideBtnGroup = document.querySelectorAll(".UpdateHideBtn")
      HideBtnGroup.forEach((item) => (item.style.display = "none"))
      CurrentSocket.Socket.send(
         JSON.stringify({
            files: {
               ino_bin: CurrentSocket.config.link,
            },
         })
      )
      SwitchElem(LytkoUpdateInformation, LytkoUpdateBar)
   }
}

function ConnectInnerSensor() {
   ConnectInnerSensorBtn.onclick = function () {
      let InnerSensorTopic = document.getElementById("InnerSensorTopic")
      let SensorAdded = document.getElementById("SensorAdded")
      let InnerSensorDataTab = document.getElementById("InnerSensorDataTab")
      let NameAddedTopic = document.getElementById("NameAddedTopic")
      TogglePopUp(SensorAdded)
      InnerSensorTopic.type = "password"
      if (InnerSensorTopic.value != "") {
         CurrentSocket.Socket.send(
            JSON.stringify({
               mqtt_external_topic: InnerSensorTopic.value,
            })
         )
         InnerSensorDataTab.style.display = "none"
         NameAddedTopic.innerText = InnerSensorTopic.value
         AddedTopic.style.display = "flex"
         this.style.display = "none"
         DisconnectInnerSensorBtn.style.display = "flex"
      }
   }
   DisconnectInnerSensorBtn.onclick = function () {
      CurrentSocket.Socket.send(
         JSON.stringify({
            mqtt_external: "disconnect",
         })
      )
      SetLoader(5, function () {
         location.host = location.host
      })
   }
}
function ChangeTargetTemp() {
   let TypeWidgetTemp =
      CurrentSocket.type === "esp8266_thermostat" ||
      CurrentSocket.type === "esp8266_thermostat_plus" ||
      CurrentSocket.type === "esp32_panel_4inch"
         ? document.getElementById("MainDisplayTermostat")
         : document.getElementById("MainDisplayConditioner")
   let MainMenuWidgetValueTemp = TypeWidgetTemp.getElementsByClassName("MainMenuWidgetValueTemp")[0]
   let MainMenuTempValue = TypeWidgetTemp.getElementsByClassName("MainMenuTempValue")[0]
   if (CurrentSocket.type === "esp8266_thermostat" || CurrentSocket.type === "esp8266_thermostat_plus") {
      if (Number(CurrentSocket.config.is_target_temp_first)) {
         MainMenuWidgetValueTemp.innerHTML = CurrentSocket.update.target_temp + "°"
         MainMenuTempValue.innerHTML = CurrentSocket.update.temp + "°"
      } else {
         MainMenuWidgetValueTemp.innerHTML = CurrentSocket.update.temp + "°"
         MainMenuTempValue.innerHTML = CurrentSocket.update.target_temp + "°"
      }
   } else if (CurrentSocket.type === "esp32_panel_4inch") {
      if (Number(CurrentSocket.config.is_target_temp_first)) {
         if (!CurrentSocket.active_channel) {
            MainMenuWidgetValueTemp.innerHTML = CurrentSocket.update_1ch.target_temp + "°"
            MainMenuTempValue.innerHTML = CurrentSocket.update_1ch.temp + "°"
         } else {
            MainMenuWidgetValueTemp.innerHTML = CurrentSocket.update_2ch.target_temp + "°"
            MainMenuTempValue.innerHTML = CurrentSocket.update_2ch.temp + "°"
         }
      } else {
         if (!CurrentSocket.active_channel) {
            MainMenuWidgetValueTemp.innerHTML = CurrentSocket.update_1ch.target_temp + "°"
            MainMenuTempValue.innerHTML = CurrentSocket.update_1ch.temp + "°"
         } else {
            MainMenuWidgetValueTemp.innerHTML = CurrentSocket.update_2ch.target_temp + "°"
            MainMenuTempValue.innerHTML = CurrentSocket.update_2ch.temp + "°"
         }
      }
   }
}
function InsertExternalInnerSensor() {
   if (CurrentSocket.config.mqtt_external_topic != "" && CurrentSocket.config.mqtt_external_topic != null) {
      let InnerSensorDataTab = document.getElementById("InnerSensorDataTab")
      InnerSensorDataTab.style.display = "none"
      let NameAddedTopic = document.getElementById("NameAddedTopic")
      NameAddedTopic.innerText = CurrentSocket.config.mqtt_external_topic
      DisconnectInnerSensorBtn.style.display = "flex"
      ConnectInnerSensorBtn.style.display = "none"
      AddedTopic.style.display = "flex"
   }
}
function InsertMqtt() {
   let AdressMqtt = document.getElementById("AdressMqtt")
   let PortMqtt = document.getElementById("PortMqtt")
   let LoginMqtt = document.getElementById("LoginMqtt")
   let PasswordMqtt = document.getElementById("PasswordMqtt")
   let CopyIcon =
      '<svg width="9" height="13" viewBox="0 0 9 13" fill="none"><rect x = "0.5" y = "0.5" width = "6" height = "9" rx = "0.5" stroke = "white" /><rect x="2.5" y="3.5" width="6" height="9" rx="0.5" stroke="white" /></svg >'
   let MqttDeviceSettingItem = document.getElementById("InnerSensorSetting")
   if (CurrentSocket.config.homekit != "0") {
      MqttDeviceSettingItem.onclick = null
      let MqttOnly = document.getElementById("OnlyMqtt")
      MqttOnly.style.display = "flex"
   }
   let MqttSwitch = document.getElementById("MqttSwitch")
   let SwitchMQTTBtn = document.getElementById("SwitchMQTTBtn")
   let SwitchMqttComlete = document.getElementById("SwitchMqttComlete")
   if (
      CurrentSocket.config.homekit === "0" ||
      CurrentSocket.config.homekit === undefined ||
      CurrentSocket.type === "esp32_panel_4inch"
   ) {
      MqttSwitch.style.display = "none"
      SwitchMQTTBtn.style.display = "none"
      if (
         (CurrentSocket.mqtt_topics != "{}" ||
            CurrentSocket.mqtt_topics_1ch != "{}" ||
            CurrentSocket.mqtt_topics_2ch != "{}") &
         (CurrentSocket.config.mqtt_use != "0")
      ) {
         var UpdateSocketBlock = document.getElementById("UpdateSocketBlock")
         var StateMqttTopic = document.getElementById("StateMqttTopic")
         var TargetTempMqttTopic = document.getElementById("TargetTempMqttTopic")
         var SetUpMqttTopic = document.getElementById("SetUpMqttTopic")
         var SetDownMqttTopic = document.getElementById("SetDownMqttTopic")
         var HeatingMqttTopic = document.getElementById("HeatingMqttTopic")
         if (
            CurrentSocket.type === "esp8266_thermostat" ||
            CurrentSocket.type === "esp8266_thermostat_plus" ||
            CurrentSocket.type === "esp8266_air"
         ) {
            StateMqttTopic.innerHTML = CurrentSocket.mqtt_topics.state + CopyIcon
            TargetTempMqttTopic.innerHTML = CurrentSocket.mqtt_topics.target_temp + CopyIcon
            SetUpMqttTopic.innerHTML = CurrentSocket.mqtt_topics.step_up + CopyIcon
            SetDownMqttTopic.innerHTML = CurrentSocket.mqtt_topics.step_down + CopyIcon
            HeatingMqttTopic.innerHTML = CurrentSocket.mqtt_topics.heating + CopyIcon
         } else {
            if (CurrentSocket.active_channel) {
               StateMqttTopic.innerHTML = CurrentSocket.mqtt_topics_2ch.state + CopyIcon
               TargetTempMqttTopic.innerHTML = CurrentSocket.mqtt_topics_2ch.target_temp + CopyIcon
               SetUpMqttTopic.innerHTML = CurrentSocket.mqtt_topics_2ch.step_up + CopyIcon
               SetDownMqttTopic.innerHTML = CurrentSocket.mqtt_topics_2ch.step_down + CopyIcon
               HeatingMqttTopic.innerHTML = CurrentSocket.mqtt_topics_2ch.heating + CopyIcon
            } else {
               StateMqttTopic.innerHTML = CurrentSocket.mqtt_topics_1ch.state + CopyIcon
               TargetTempMqttTopic.innerHTML = CurrentSocket.mqtt_topics_1ch.target_temp + CopyIcon
               SetUpMqttTopic.innerHTML = CurrentSocket.mqtt_topics_1ch.step_up + CopyIcon
               SetDownMqttTopic.innerHTML = CurrentSocket.mqtt_topics_1ch.step_down + CopyIcon
               HeatingMqttTopic.innerHTML = CurrentSocket.mqtt_topics_1ch.heating + CopyIcon
            }
         }
         GetMQTTData.style.display = "flex"
         AdressMqtt.value = CurrentSocket.config.mqtt_server
         PortMqtt.value = CurrentSocket.config.mqtt_port
         LoginMqtt.value = CurrentSocket.config.mqtt_login
         var updateString
         if (CurrentSocket.type === "esp32_panel_4inch") {
            if (CurrentSocket.active_channel === 0) {
               updateString =
                  '{<br />&nbsp;&nbsp;"update_1ch": {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "temp": ' +
                  CurrentSocket.update_1ch.temp +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "target_temp": ' +
                  CurrentSocket.update_1ch.target_temp +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "relay": ' +
                  CurrentSocket.update_1ch.relay +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"heating": ' +
                  CurrentSocket.update_1ch.heating +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "unit": ' +
                  CurrentSocket.update_1ch.unit +
                  " <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br />}"
            } else {
               updateString =
                  '{<br />&nbsp;&nbsp;"update_2ch": {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "temp": ' +
                  CurrentSocket.update_2ch.temp +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "target_temp": ' +
                  CurrentSocket.update_2ch.target_temp +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "relay": ' +
                  CurrentSocket.update_2ch.relay +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"heating": ' +
                  CurrentSocket.update_2ch.heating +
                  ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "unit": ' +
                  CurrentSocket.update_2ch.unit +
                  " <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br />}"
            }
         } else {
            updateString =
               '{<br />&nbsp;&nbsp;"update": {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "temp": ' +
               CurrentSocket.update.temp +
               ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "target_temp": ' +
               CurrentSocket.update.target_temp +
               ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "relay": ' +
               CurrentSocket.update.relay +
               ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"heating": ' +
               CurrentSocket.update.heating +
               ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "name": ' +
               CurrentSocket.update.name +
               ', <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "unit": ' +
               CurrentSocket.update.unit +
               " <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br />}"
         }
         UpdateSocketBlock.innerHTML = updateString
      } else {
         AdressMqtt.value = ""
         PortMqtt.value = ""
         LoginMqtt.value = ""
         GetMQTTData.style.display = "none"
      }
      if (CurrentSocket.config.mqtt_use === "1") {
         ConnectMQTTBtn.style.display = "none"
         DisconnectMQTTBtn.style.display = "block"
      } else {
         ConnectMQTTBtn.style.display = "block"
         DisconnectMQTTBtn.style.display = "none"
      }
   } else {
      MqttInputData.style.display = "none"
      MqttSwitch.style.display = "block"
      SwitchMQTTBtn.style.display = "block"
      ConnectMQTTBtn.style.display = "none"
      DisconnectMQTTBtn.style.display = "none"
   }
   SwitchMQTTBtn.onclick = function () {
      document.getElementById("DropUpSwitchMqtt").style.display = "flex"
   }
   SwitchMqttComlete.onclick = function () {
      this.parentElement.parentElement.parentElement.style.display = "none"
      SetLoader(5, function () {
         location.host = location.host
      })
      CurrentSocket.Socket.send(
         JSON.stringify({
            config: {
               homekit: 0,
            },
         })
      )
   }
   ConnectMQTTBtn.onclick = function () {
      let mqttConnectPopup = document.getElementById("MqttConnectPopup")
      TogglePopUp(mqttConnectPopup)
      setTimeout(function () {
         if ((AdressMqtt.value != "") & (PortMqtt.value != "")) {
            CurrentSocket.Socket.send(
               JSON.stringify({
                  mqtt_connect: {
                     mqtt_server: AdressMqtt.value.trim(),
                     mqtt_port: PortMqtt.value.trim(),
                     mqtt_login: LoginMqtt.value.trim(),
                     mqtt_password: PasswordMqtt.value.trim(),
                  },
               })
            )
            SetLoader(5, function () {
               location.host = location.host
            })
         }
      }, 2000)
   }
   DisconnectMQTTBtn.onclick = function () {
      CurrentSocket.Socket.send(JSON.stringify({ mqtt_disconnect: 1 }))
      SetLoader(5, function () {
         location.host = location.host
      })
   }
   GetMQTTData.onclick = function () {
      SwitchElem(MqttInputData, MQTTReceivedInfo)
      ConnectMQTTBtn.style.display = "none"
      DisconnectMQTTBtn.style.display = "none"
   }
   if (CurrentSocket.config.mqtt_use === "true") {
      document.getElementsByClassName("MqttConnect")[0].style.display = "flex"
   } else {
      document.getElementsByClassName("MqttConnect")[0].style.display = "none"
   }
}
function fff() {
   ArraySocket[0].Socket.send(JSON.stringify("reset"))
}
function TabloTempInitialization() {
   MaxTablo = document.getElementById("TabloTempMax").querySelector(".ChangingTempTablo")
   MinTablo = document.getElementById("TabloTempMin").querySelector(".ChangingTempTablo")
   GisteresisTablo = document.getElementById("TabloTempGisteresis").querySelector(".ChangingTempTablo")
   CorrectionTablo = document.getElementById("TabloTempCorrection").querySelector(".ChangingTempTablo")
}
function InsertTemp() {
   let Correction
   let Gisteresis
   let MaxTemp
   let MinTemp
   let ChannelData = CurrentSocket.active_channel === 0 ? CurrentSocket.config_1ch : CurrentSocket.config_2ch
   if (CurrentSocket.type === "esp32_panel_4inch") {
      Correction =
         (ChannelData.sensor_corr != undefined) & (ChannelData.sensor_corr != null) ? ChannelData.sensor_corr : "X"
      Gisteresis =
         (ChannelData.hysteresis != undefined) & (ChannelData.hysteresis != null) ? ChannelData.hysteresis : "X"
      MaxTemp = (ChannelData.max_temp != undefined) & (ChannelData.max_temp != null) ? ChannelData.max_temp : "X"
      MinTemp = (ChannelData.min_temp != undefined) & (ChannelData.min_temp != null) ? ChannelData.min_temp : "X"
   } else {
      Correction =
         (CurrentSocket.config.sensor_corr != undefined) & (CurrentSocket.config.sensor_corr != null)
            ? CurrentSocket.config.sensor_corr
            : "X"
      Gisteresis =
         (CurrentSocket.config.hysteresis != undefined) & (CurrentSocket.config.hysteresis != null)
            ? CurrentSocket.config.hysteresis
            : "X"
      MaxTemp =
         (CurrentSocket.config.max_temp != undefined) & (CurrentSocket.config.max_temp != null)
            ? CurrentSocket.config.max_temp
            : "X"
      MinTemp =
         (CurrentSocket.config.min_temp != undefined) & (CurrentSocket.config.min_temp != null)
            ? CurrentSocket.config.min_temp
            : "X"
   }
   GisteresisTablo.innerHTML =
      Gisteresis != "X" ? getKeyByValue(GisteresisInvertArray, GisteresisInvertArray[Number(Gisteresis)]) : "X"
   let sensor_corr_invert = CorrectionInvertArray[Correction]
   if (sensor_corr_invert != undefined) CorrectionTablo.innerHTML = sensor_corr_invert
   else CorrectionTablo.innerHTML = Correction != "X" ? getKeyByValue(CorrectionInvertArray, Correction) : "X"
   MaxTablo.innerHTML = MaxTemp
   MinTablo.innerHTML = MinTemp
   ChangeTempPositionBtn.onclick = function () {
      let ChangeTempPositionPopUp = document.getElementById("ChangeTempPositionPopUp")
      let TagetTemp =
         CurrentSocket.type === "esp32_panel_4inch"
            ? CurrentSocket.active_channel === 0
               ? CurrentSocket.config_1ch.is_target_temp_first
               : CurrentSocket.config_2ch.is_target_temp_first
            : CurrentSocket.config.is_target_temp_first
      TogglePopUp(ChangeTempPositionPopUp)
      if (TagetTemp === "0") {
         if (CurrentSocket.type != "esp32_panel_4inch")
            CurrentSocket.Socket.send(JSON.stringify({ is_target_temp_first: 0 }))
         else if (!CurrentSocket.active_channel) {
            CurrentSocket.Socket.send(
               JSON.stringify({
                  config_1ch: {
                     is_target_temp_first: "0",
                  },
               })
            )
         } else {
            CurrentSocket.Socket.send(
               JSON.stringify({
                  config_2ch: {
                     is_target_temp_first: "0",
                  },
               })
            )
         }
      } else {
         if (CurrentSocket.type != "esp32_panel_4inch")
            CurrentSocket.Socket.send(JSON.stringify({ is_target_temp_first: 1 }))
         else if (!CurrentSocket.active_channel) {
            CurrentSocket.Socket.send(
               JSON.stringify({
                  config_1ch: {
                     is_target_temp_first: "1",
                  },
               })
            )
         } else {
            CurrentSocket.Socket.send(
               JSON.stringify({
                  config_2ch: {
                     is_target_temp_first: "1",
                  },
               })
            )
         }
      }
   }
}
function PairHk() {
   let PairHomekit = document.getElementById("PairHomekit")
   let Qrcode = document.getElementById("qrcode")
   let BtnMenuHomekit = document.getElementById("BtnMenuHomekit")
   let SwitchHomekit = document.getElementById("SwitchHomekit")
   let SwitchHomekitBtn = document.getElementById("SwitchHomekitBtn")
   let DispairHomekit = document.getElementById("DispairHomekit")
   let NotQrcode = document.getElementById("NotQrcode")
   if (
      CurrentSocket.config.homekit === "1" ||
      CurrentSocket.config.homekit === "2" ||
      CurrentSocket.type === "esp32_panel_4inch"
   ) {
      if (CurrentSocket.config.pair_hk === "0") {
         if (CurrentSocket.qr_hk != undefined) {
            Qrcode.innerHTML = ""
            var qrcode = new QRCode("qrcode", {
               text: CurrentSocket.qr_hk,
               width: 220,
               height: 220,
               colorDark: "#000000",
               colorLight: "#ffffff",
               correctLevel: QRCode.CorrectLevel.H,
            })
            PairHomekit.style.display = "block"
            NotQrcode.style.display = "none"
            DispairHomekit.style.display = "none"
         } else {
            NotQrcode.style.display = "block"
            PairHomekit.style.display = "none"
            Qrcode.innerHTML = ""
         }
         BtnMenuHomekit.style.display = "none"
         SwitchHomekit.style.display = "none"
      } else if (CurrentSocket.config.pair_hk === "1") {
         DispairHomekit.style.display = "block"
         SwitchHomekit.style.display = "none"
         SwitchHomekitBtn.style.display = "none"
         PairHomekit.style.display = "none"
         Qrcode.innerHTML = ""
      }
   } else {
      DispairHomekitBtn.style.display = "none"
      SwitchHomekit.style.display = "block"
      SwitchHomekitBtn.style.display = "block"
      PairHomekit.style.display = "none"
      Qrcode.innerHTML = ""
   }

   DispairHomekitBtn.onclick = function () {
      document.getElementById("DropUpHomekit").style.display = "flex"
   }
   SwitchHomekitBtn.onclick = function () {
      document.getElementById("DropUpSwitch").style.display = "flex"
   }
   DropHomekit.onclick = function () {
      this.parentElement.parentElement.parentElement.style.display = "none"
      TogglePopUp(document.getElementById("DisconnectPopUpHomekit"))
      CurrentSocket.Socket.send(
         JSON.stringify({
            clear_homekit: 1,
         })
      )
      let SetTimeoutHomekit = function () {
         SetLoader(5, function () {
            location.host = location.host
         })
      }
      setTimeout(SetTimeoutHomekit, 2000)
   }
   SwitchHomekitComlete.onclick = function () {
      this.parentElement.parentElement.parentElement.style.display = "none"
      CurrentSocket.Socket.send(
         JSON.stringify({
            config: {
               homekit: 1,
            },
         })
      )
      SetLoader(5, function () {
         location.host = location.host
      })
   }
}
let ZigBeeSensorIndexToDisconnect
let SensorTempId
function ZigBeeSet() {
   let SensorTempArrowUp = TabloSensorTemp.getElementsByClassName("TempUp")
   let SensorTempArrowDown = TabloSensorTemp.getElementsByClassName("TempDown")
   let ZigBeeInfo = document.getElementsByClassName("ZigBeeInfo")[0]
   if (CurrentSocket.zigbee != "{}") {
      ZigBeeInfo.style.display = "none"
      ZigBeeSensors.style.display = "block"
      for (let i = 0; 5 > i; i++) {
         if (CurrentSocket.zigbee[i] != null) {
            CreateZigBeeBlock(CurrentSocket.zigbee[i], i)
         }
      }
   } else {
      ZigBeeInfo.style.display = "block"
      ZigBeeSensors.style.display = "none"
   }
   PairingBtnZigBee.onclick = function () {
      CurrentSocket.Socket.send(
         JSON.stringify({
            pair_zigbee: 1,
         })
      )
      SetLoader(30, function () {
         location.host = location.host
      })
   }
   ClearZigBee.onclick = function () {
      CurrentSocket.Socket.send(
         JSON.stringify({
            clear_zigbee_module: 1,
         })
      )
      SetLoader(4, function () {
         location.host = location.host
      })
   }
   if ((CurrentSocket.zigbee != null) & (CurrentSocket.zigbee != undefined) & (CurrentSocket.zigbee != "{}")) {
      if (CurrentSocket.zigbee[4] === null || CurrentSocket.zigbee[4] === undefined) {
         PairingBtnZigBee.removeAttribute("disabled")
         PairingBtnZigBee.style.background = "#035CD0"
      } else {
         PairingBtnZigBee.setAttribute("disabled", "disabled")
         PairingBtnZigBee.style.background = "#1F3C62"
      }
   }
   DisconnectBtnZigBee.onclick = function () {
      CurrentSocket.Socket.send(
         JSON.stringify({
            clear_zigbee: ZigBeeSensorIndexToDisconnect,
         })
      )
      SetLoader(30, function () {
         location.host = location.host
      })
   }
   if (!CurrentSocket.active_channel) {
      ChangingTempTabloSensor.innerHTML =
         (CurrentSocket.config_1ch.temp_limit != undefined) &
         (CurrentSocket.config_1ch.temp_limit != null) &
         (CurrentSocket.config_1ch.temp_limit != "")
            ? CurrentSocket.config_1ch.temp_limit
            : "28"
   } else {
      ChangingTempTabloSensor.innerHTML =
         (CurrentSocket.config_2ch.temp_limit != undefined) &
         (CurrentSocket.config_2ch.temp_limit != null) &
         (CurrentSocket.config_2ch.temp_limit != "")
            ? CurrentSocket.config_2ch.temp_limit
            : "28"
   }
   let GetSensor
   if (
      !CurrentSocket.active_channel &
      (CurrentSocket.config_1ch.sensor_zigbee != undefined) &
      (CurrentSocket.config_1ch.sensor_zigbee != null) &
      (CurrentSocket.config_1ch.sensor_zigbee != "") &
      (CurrentSocket.config_1ch.sensor_zigbee != "none")
   ) {
      ScrollingMenuSensorTemp.querySelectorAll(".SelectedIcon").forEach((item) => (item.style.display = "none"))
      GetSensor = document.getElementById(CurrentSocket.config_1ch.sensor_zigbee + "sensortemp")
      SelectSensorTemp(GetSensor)
   } else if (
      (CurrentSocket.config_2ch.sensor_zigbee != undefined) &
      (CurrentSocket.config_2ch.sensor_zigbee != null) &
      (CurrentSocket.config_2ch.sensor_zigbee != "") &
      (CurrentSocket.config_2ch.sensor_zigbee != "none")
   ) {
      ScrollingMenuSensorTemp.querySelectorAll(".SelectedIcon").forEach((item) => (item.style.display = "none"))
      GetSensor = document.getElementById(CurrentSocket.config_2ch.sensor_zigbee + "sensortemp")
      SelectSensorTemp(GetSensor)
   } else {
      ScrollingMenuSensorTemp.querySelectorAll(".SelectedIcon").forEach((item) => (item.style.display = "none"))
   }
   SensorTempArrowUp[0].onclick = function () {
      let ValueTemp = Number(ChangingTempTabloSensor.innerHTML)
      let ResultValueTemp = (ValueTemp >= 15) & (ValueTemp < 45) ? ValueTemp + 1 : ValueTemp
      ChangingTempTabloSensor.innerHTML = ResultValueTemp
      if (!CurrentSocket.active_channel) {
         CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { temp_limit: ResultValueTemp } }))
      } else {
         CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { temp_limit: ResultValueTemp } }))
      }
   }
   SensorTempArrowDown[0].onclick = function () {
      let ValueTemp = Number(ChangingTempTabloSensor.innerHTML)
      let ResultValueTemp = (ValueTemp > 15) & (ValueTemp <= 45) ? ValueTemp - 1 : ValueTemp
      ChangingTempTabloSensor.innerHTML = ResultValueTemp
      if (!CurrentSocket.active_channel) {
         CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { temp_limit: ResultValueTemp } }))
      } else {
         CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { temp_limit: ResultValueTemp } }))
      }
   }
}

function CreateZigBeeBlock(sensor, number) {
   let SelectBlock = document.createElement("div")
   let NameSensor = document.createElement("div")
   let SelectedIcon = document.createElement("div")
   SelectBlock.className = "SelectingBlock ZigBeeSensorBlock"
   SelectBlock.id = sensor.ShotAddr
   NameSensor.className = "NameSensor"
   NameSensor.innerHTML = sensor.ShotAddr
   NameSensor.id = number
   SelectedIcon.className = "SelectedIcon"
   SelectedIcon.innerHTML =
      '<svg width="20" height="15" viewBox="0 0 20 15" fill="none"><path d = "M0 8.13808L6.84888 15L20 1.86194L18.1119 0L6.84888 11.2499L1.86191 6.26303L0 8.13808Z" fill = "#2C98F0" /></svg >'
   SelectBlock.append(NameSensor)
   SelectBlock.append(SelectedIcon)
   ZigBeeSensors.append(SelectBlock)
   SelectBlock.onclick = function () {
      SelectZigBeeSensor(this)
   }
}
function CreateZigBeeBlockSensorTemp(Sensor, number) {
   let SelectBlock = document.createElement("div")
   let NameSensor = document.createElement("div")
   let SelectedIcon = document.createElement("div")
   SelectBlock.className = "SelectingBlock SensorTempBlock"
   SelectBlock.id = Sensor.ShotAddr + "sensortemp"
   NameSensor.className = "NameSensor"
   NameSensor.innerHTML = "Aqara " + number
   NameSensor.id = Sensor.id + "sensortemp"
   SelectedIcon.className = "SelectedIcon"
   SelectedIcon.innerHTML =
      '<svg width="20" height="15" viewBox="0 0 20 15" fill="none"><path d = "M0 8.13808L6.84888 15L20 1.86194L18.1119 0L6.84888 11.2499L1.86191 6.26303L0 8.13808Z" fill = "#2C98F0" /></svg>'
   SelectBlock.append(NameSensor)
   SelectBlock.append(SelectedIcon)
   ScrollingMenuSensorTemp.append(SelectBlock)
   SelectBlock.onclick = function () {
      SelectSensorTemp(this)
   }
}
let SelectSensorTempInfo = document.getElementById("SelectSensorTempInfo")
let NoneSelectSensorTempInfo = document.getElementById("NoneSelectSensorTempInfo")
function SelectSensorTemp(item) {
   let ComposedStyleSensorTemp = getComputedStyle(item.children[1])
   let checkedSelectedIcon = ComposedStyleSensorTemp.display
   if (checkedSelectedIcon === "none" || checkedSelectedIcon === "") {
      ScrollingMenuSensorTemp.querySelectorAll(".SelectedIcon").forEach((item) => (item.style.display = "none"))
      item.children[1].style.display = "block"
      TabloSensorTemp.style.display = "flex"
      SelectSensorTempInfo.style.display = "block"
      NoneSelectSensorTempInfo.style.display = "none"
      let IdSensorTemp = item.id.replace("sensortemp", "")
      if (!CurrentSocket.active_channel) {
         CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { sensor_zigbee: IdSensorTemp } }))
      } else {
         CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { sensor_zigbee: IdSensorTemp } }))
      }
   } else {
      item.children[1].style.display = "none"
      TabloSensorTemp.style.display = "none"
      SelectSensorTempInfo.style.display = "none"
      NoneSelectSensorTempInfo.style.display = "block"
      if (!CurrentSocket.active_channel) {
         CurrentSocket.Socket.send(JSON.stringify({ config_1ch: { sensor_zigbee: "none" } }))
      } else {
         CurrentSocket.Socket.send(JSON.stringify({ config_2ch: { sensor_zigbee: "none" } }))
      }
   }
}
function SetLoader(time, func) {
   let Loader = document.getElementsByClassName("LoaderHandler")[0]
   Loader.style.display = "block"
   let TimeLoader = time
   let TimerId = setInterval(function () {
      TimeLoader = TimeLoader - 1
      if (time < 500) Loader.children[1].innerHTML = TimeLoader + " сек"
   }, 1000)
   if (func != null) {
      setTimeout(function () {
         Loader.style.display = "none"
         TimerId = setInterval(() => {
            clearInterval(TimerId)
            func()
         }, 0)
      }, time * 1000)
   } else {
      setTimeout(function () {
         Loader.style.display = "none"
         TimerId = setInterval(() => {
            clearInterval(TimerId)
         })
      }, time * 1000)
   }
}
function SelectZigBeeSensor(item) {
   let checkedSelectedIcon = item.children[1].style.display
   if (checkedSelectedIcon === "none" || checkedSelectedIcon === "") {
      ZigBeeSensors.querySelectorAll(".SelectedIcon").forEach((item) => (item.style.display = "none"))
      item.children[1].style.display = "block"
      ZigBeeSensorIndexToDisconnect = item.querySelector(".NameSensor").id
      DisconnectBtnZigBee.style.display = "block"
      PairingBtnZigBee.style.display = "none"
   } else {
      item.children[1].style.display = "none"
      ZigBeeSensorIndexToDisconnect = null
      DisconnectBtnZigBee.style.display = "none"
      PairingBtnZigBee.style.display = "block"
   }
}
let HeatingIcon =
   '<svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d = "M14.86 10.2339C13.4205 6.38701 8.29518 6.17958 9.53296 0.588392C9.62465 0.173531 9.19372 -0.147043 8.8453 0.069816C5.51703 2.08755 3.12398 6.13244 5.13194 11.4313C5.29698 11.8651 4.80187 12.2705 4.44429 11.9876C2.78474 10.6959 2.61053 8.83846 2.75723 7.50902C2.81224 7.01873 2.18877 6.78302 1.92287 7.18845C1.29939 8.16903 0.666748 9.75304 0.666748 12.1385C1.01516 17.4185 5.352 19.0403 6.91069 19.2477C9.1387 19.54 11.5501 19.1157 13.283 17.4845C15.1901 15.6648 15.8869 12.7608 14.86 10.2339ZM6.35139 14.9765C7.6717 14.6465 8.35019 13.6659 8.53356 12.7985C8.83613 11.4502 7.65336 10.1302 8.45104 7.99931C8.75361 9.76247 11.4492 10.8656 11.4492 12.7891C11.5226 15.1745 9.01034 17.2205 6.35139 14.9765Z" fill = "white" /></svg >'
let Fan =
   '<svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d = "M5.47678 10.1066C5.36753 10.1066 5.30049 10.1066 5.23593 10.1066C3.95225 10.1066 2.66857 10.1066 1.38737 10.1066C1.28061 10.1066 1.17136 10.1017 1.06459 10.0793C0.841128 10.0371 0.689668 9.88316 0.684703 9.6597C0.672288 8.90488 0.64001 8.15255 0.843611 7.41015C1.3551 5.54547 2.99135 4.15502 4.9206 3.98122C6.42029 3.84465 7.69901 4.32634 8.76667 5.38159C8.78653 5.40146 8.80888 5.42132 8.86599 5.47346C8.86599 5.37663 8.86599 5.31455 8.86599 5.25248C8.86599 3.97377 8.86599 2.69754 8.86599 1.41882C8.86599 1.36668 8.8635 1.31702 8.86599 1.26488C8.88833 0.837815 9.05469 0.676423 9.48424 0.676423C10.1422 0.676423 10.8002 0.651594 11.4482 0.812985C13.7052 1.37413 15.2298 3.52684 14.9964 5.83845C14.8797 6.98309 14.4079 7.95888 13.5935 8.76832C13.5736 8.78819 13.5538 8.81053 13.5016 8.86764C13.5985 8.86764 13.6605 8.86764 13.7226 8.86764C15.0013 8.86764 16.2776 8.86764 17.5563 8.86764C17.601 8.86764 17.6481 8.86764 17.6928 8.86764C18.1323 8.88254 18.2987 9.05138 18.2987 9.48589C18.2987 10.1439 18.3235 10.8018 18.1621 11.4499C17.601 13.7044 15.4483 15.2289 13.1366 14.9955C11.992 14.8788 11.0162 14.4071 10.2068 13.5927C10.1869 13.5728 10.1646 13.5554 10.1075 13.5008C10.1075 13.5976 10.1075 13.6597 10.1075 13.7218C10.1075 14.9931 10.1075 16.2643 10.1075 17.5381C10.1075 17.5902 10.1099 17.6399 10.1075 17.692C10.0926 18.1315 9.92372 18.2978 9.48672 18.2954C8.82874 18.2954 8.17325 18.3177 7.52272 18.1588C5.61582 17.6895 4.1484 15.9962 3.97956 14.0471C3.84797 12.5399 4.33959 11.2612 5.39732 10.191C5.41222 10.1737 5.42712 10.1588 5.47678 10.1066ZM10.1199 1.91789C10.1149 1.95265 10.1075 1.97997 10.1075 2.00728C10.1075 3.73789 10.1075 5.47098 10.105 7.20159C10.105 7.30835 10.1596 7.3307 10.2415 7.3605C10.7307 7.54175 11.1205 7.84963 11.3961 8.29656C11.4607 8.40085 11.5153 8.5101 11.5749 8.61686C12.9604 8.11034 14.0752 6.54361 13.7152 4.71368C13.3651 2.93838 11.7661 1.82602 10.1199 1.91789ZM8.85357 17.0489C8.85854 17.0266 8.8635 17.0166 8.8635 17.0042C8.8635 15.2562 8.8635 13.5058 8.86847 11.7578C8.86847 11.656 8.81136 11.6386 8.73936 11.6138C8.24277 11.4325 7.85047 11.1197 7.57486 10.6678C7.51279 10.5685 7.46064 10.4617 7.40602 10.3574C6.02799 10.849 4.88832 12.4431 5.26821 14.2879C5.64065 16.1178 7.32905 17.1706 8.85357 17.0489ZM8.61521 7.39526C8.12359 6.02467 6.51216 4.84776 4.60278 5.28724C2.75547 5.71182 1.80699 7.43747 1.92866 8.87012C1.95845 8.87261 1.99073 8.86764 2.02301 8.86764C3.74865 8.86764 5.47429 8.86764 7.19993 8.87012C7.30422 8.87012 7.33153 8.82046 7.36133 8.73853C7.51527 8.31146 7.77101 7.95392 8.14097 7.68824C8.28995 7.58148 8.4563 7.49209 8.61521 7.39526ZM10.3508 11.5666C10.9318 13.1135 12.6922 14.1712 14.542 13.6423C16.3595 13.1234 17.1789 11.3829 17.0398 10.1066C16.9802 10.1066 16.9182 10.1066 16.8561 10.1066C16.208 10.1066 15.5625 10.1066 14.9144 10.1066C13.8815 10.1066 12.8486 10.1041 11.8157 10.1116C11.7512 10.1116 11.6494 10.1513 11.632 10.1985C11.4011 10.8366 10.9715 11.286 10.3508 11.5666ZM9.49417 10.5089C10.0578 10.5039 10.5097 10.047 10.5072 9.48341C10.5047 8.92226 10.0503 8.46789 9.48672 8.4654C8.92061 8.46292 8.4563 8.9322 8.46623 9.49831C8.47368 10.0619 8.93303 10.5138 9.49417 10.5089Z" fill = "#456FA6" /></svg >'
function CreateDeviceBlock(Socket, type) {
   let PlaceForDeviceBlock = document.getElementsByClassName("DeviceList")[0]
   let DeviceBlock = document.createElement("div")
   let DeviceBlockTitle = document.createElement("div")
   let DeviceBlockValue = document.createElement("div")
   let DeviceBlockControl = document.createElement("div")
   let DeviceBlockControlTablo = document.createElement("div")
   let DeviceBlockControlTabloFan = document.createElement("div")
   DeviceBlock.className = "DeviceBlock"
   DeviceBlockTitle.className = "DeviceBlockTitle"
   DeviceBlockValue.className = "DeviceBlockValue"
   DeviceBlockControl.className = "DeviceBlockControl"
   DeviceBlockControlTablo.className = "DeviceBlockControlTablo"
   if (type === "esp8266_thermostat" || type === "esp8266_thermostat_plus" || type === "esp32_panel_4inch") {
      DeviceBlockControlTablo.className = "DeviceBlockControlTablo HeatingTermostatByID"
      DeviceBlockControlTablo.innerHTML = HeatingIcon
      DeviceBlockControl.append(DeviceBlockControlTablo)
      DeviceBlockTitle.innerHTML =
         (Socket.config.name != null) & (Socket.config.name != undefined) ? Socket.config.name : "X"
      if (type === "esp8266_thermostat" || type === "esp8266_thermostat_plus") {
         DeviceBlock.id = Socket.id
      } else if (type === "esp32_panel_4inch") {
         DeviceBlock.id = Socket.channel_number === 0 ? Socket.id_for_use_ch1 : Socket.id_for_use_ch2
      }
      DeviceBlock.append(DeviceBlockTitle)
      DeviceBlock.append(DeviceBlockValue)
      DeviceBlock.append(DeviceBlockControl)
      PlaceForDeviceBlock.append(DeviceBlock)
      DeviceBlock.onclick = function (event) {
         CurrentSocket = ArraySocket.find((item) => {
            let BlockId =
               this.id.includes("type_1ch") || this.id.includes("type_2ch")
                  ? this.id.substr(0, this.id.length - 8)
                  : this.id
            if (item.id === BlockId) {
               item.channel_number = this.id.includes("type_1ch") ? 0 : 1
               item.active_channel = this.id.includes("type_1ch") ? 0 : 1
               return item
            }
         })
         ShowMainMenuBySocket(CurrentSocket)
         SwitchElem(MainDisplay, MainDisplayTermostat)
      }
      DeviceBlockControlTablo.onclick = function (event) {
         event.stopPropagation()
         CurrentBlockID = this.parentElement.parentElement.id
         let ChannelPanel = CurrentBlockID.includes("type_1ch") ? 0 : 1
         let CheckedBlockId =
            CurrentBlockID.includes("type_1ch") || CurrentBlockID.includes("type_2ch")
               ? CurrentBlockID.substr(0, CurrentBlockID.length - 8)
               : CurrentBlockID
         TargetSocket = ArraySocket.find((item) => item.id === CheckedBlockId)
         let Heating
         if (TargetSocket != null) {
            let Update =
               TargetSocket.type === "esp32_panel_4inch"
                  ? ChannelPanel === 0
                     ? TargetSocket.update_1ch
                     : TargetSocket.update_2ch
                  : TargetSocket.update
            Heating = Update.heating === "heat" ? 0 : 1
            this.style.background = Heating === 0 ? "#1F3C62" : "#035CD0"
            if (TargetSocket.type === "esp32_panel_4inch") {
               if (!ChannelPanel) TargetSocket.Socket.send(JSON.stringify({ update_1ch: { heating: Heating } }))
               else TargetSocket.Socket.send(JSON.stringify({ update_2ch: { heating: Heating } }))
            } else {
               TargetSocket.Socket.send(
                  JSON.stringify({
                     heating: Heating,
                  })
               )
            }
         }
      }
   } else {
      DeviceBlockControlTabloFan.className = "DeviceBlockControlTablo FanHandlerMainDisplay"
      DeviceBlockControlTablo.className = "DeviceBlockControlTablo AutoConditionerMainDisplay"
      DeviceBlockControlTablo.innerHTML = "Auto"
      DeviceBlockControl.append(DeviceBlockControlTablo)
      DeviceBlockControl.append(DeviceBlockControlTabloFan)
      DeviceBlockTitle.innerHTML =
         (Socket.config.name != null) & (Socket.config.name != undefined) ? Socket.config.name : "X"
      DeviceBlock.id = Socket.id
      DeviceBlock.append(DeviceBlockTitle)
      DeviceBlock.append(DeviceBlockValue)
      DeviceBlock.append(DeviceBlockControl)
      PlaceForDeviceBlock.append(DeviceBlock)
      DeviceBlock.onclick = function (event) {
         event.stopPropagation()
         CurrentSocket = ArraySocket.find((item) => {
            if (item.id === this.id) return item
         })
         ShowMainMenuBySocket(CurrentSocket)
         SwitchElem(MainDisplay, MainDisplayConditioner)
      }
      DeviceBlockControlTablo.onclick = function () {
         event.stopPropagation()
         CurrentSocket = ArraySocket.find((item) => {
            if (item.id === this.parentElement.parentElement.id) return item
         })
         if (CurrentSocket != null) {
            let SocketData = CurrentSocket.update.heating === "auto" ? "0" : "3"
            switch (CurrentSocket.update.heating) {
               case "auto":
                  SocketData = "1"
                  break
               case "heat":
                  SocketData = "2"
                  break
               case "cool":
                  SocketData = "0"
                  break
               case "off":
                  SocketData = "3"
                  break
            }
            CurrentSocket.Socket.send(
               JSON.stringify({
                  heating: SocketData,
               })
            )
         }
      }
      DeviceBlockControlTabloFan.onclick = function () {
         event.stopPropagation()
         CurrentSocket = ArraySocket.find((item) => {
            if (item.id === this.parentElement.parentElement.id) return item
         })
         FanSetMainDisplay(CurrentSocket, this)
      }
   }
}
let FanIconsArray = {
   0: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M5.47678 10.1066C5.36753 10.1066 5.30049 10.1066 5.23593 10.1066C3.95225 10.1066 2.66857 10.1066 1.38737 10.1066C1.28061 10.1066 1.17136 10.1017 1.06459 10.0793C0.841128 10.0371 0.689668 9.88316 0.684703 9.6597C0.672288 8.90488 0.64001 8.15255 0.843611 7.41015C1.3551 5.54547 2.99135 4.15502 4.9206 3.98122C6.42029 3.84465 7.69901 4.32634 8.76667 5.38159C8.78653 5.40146 8.80888 5.42132 8.86599 5.47346C8.86599 5.37663 8.86599 5.31455 8.86599 5.25248C8.86599 3.97377 8.86599 2.69754 8.86599 1.41882C8.86599 1.36668 8.8635 1.31702 8.86599 1.26488C8.88833 0.837814 9.05469 0.676423 9.48424 0.676423C10.1422 0.676423 10.8002 0.651594 11.4482 0.812985C13.7052 1.37413 15.2298 3.52684 14.9964 5.83845C14.8797 6.98309 14.4079 7.95888 13.5935 8.76832C13.5736 8.78819 13.5538 8.81053 13.5016 8.86764C13.5985 8.86764 13.6605 8.86764 13.7226 8.86764C15.0013 8.86764 16.2776 8.86764 17.5563 8.86764C17.601 8.86764 17.6481 8.86764 17.6928 8.86764C18.1323 8.88254 18.2987 9.05138 18.2987 9.48589C18.2987 10.1439 18.3235 10.8018 18.1621 11.4499C17.601 13.7044 15.4483 15.2289 13.1366 14.9955C11.992 14.8788 11.0162 14.4071 10.2068 13.5927C10.1869 13.5728 10.1646 13.5554 10.1075 13.5008C10.1075 13.5976 10.1075 13.6597 10.1075 13.7218C10.1075 14.9931 10.1075 16.2643 10.1075 17.5381C10.1075 17.5902 10.1099 17.6399 10.1075 17.692C10.0926 18.1315 9.92372 18.2978 9.48672 18.2954C8.82874 18.2954 8.17325 18.3177 7.52272 18.1588C5.61582 17.6895 4.1484 15.9962 3.97956 14.0471C3.84797 12.5399 4.33959 11.2612 5.39732 10.191C5.41222 10.1737 5.42712 10.1588 5.47678 10.1066ZM10.1199 1.91789C10.1149 1.95265 10.1075 1.97997 10.1075 2.00728C10.1075 3.73789 10.1075 5.47098 10.105 7.20159C10.105 7.30835 10.1596 7.3307 10.2415 7.3605C10.7307 7.54175 11.1205 7.84963 11.3961 8.29656C11.4607 8.40085 11.5153 8.5101 11.5749 8.61686C12.9604 8.11034 14.0752 6.54361 13.7152 4.71368C13.3651 2.93838 11.7661 1.82602 10.1199 1.91789ZM8.85357 17.0489C8.85854 17.0266 8.8635 17.0166 8.8635 17.0042C8.8635 15.2562 8.8635 13.5058 8.86847 11.7578C8.86847 11.656 8.81136 11.6386 8.73936 11.6138C8.24277 11.4325 7.85047 11.1197 7.57486 10.6678C7.51279 10.5685 7.46064 10.4617 7.40602 10.3574C6.02799 10.849 4.88832 12.4431 5.26821 14.2879C5.64065 16.1178 7.32905 17.1706 8.85357 17.0489ZM8.61521 7.39526C8.12359 6.02467 6.51216 4.84776 4.60278 5.28724C2.75547 5.71182 1.80699 7.43747 1.92866 8.87012C1.95845 8.87261 1.99073 8.86764 2.02301 8.86764C3.74865 8.86764 5.47429 8.86764 7.19993 8.87012C7.30422 8.87012 7.33153 8.82046 7.36133 8.73853C7.51527 8.31146 7.77101 7.95392 8.14097 7.68824C8.28995 7.58148 8.4563 7.49209 8.61521 7.39526ZM10.3508 11.5666C10.9318 13.1135 12.6922 14.1712 14.542 13.6423C16.3595 13.1234 17.1789 11.3829 17.0398 10.1066C16.9802 10.1066 16.9182 10.1066 16.8561 10.1066C16.208 10.1066 15.5625 10.1066 14.9144 10.1066C13.8815 10.1066 12.8486 10.1041 11.8157 10.1116C11.7512 10.1116 11.6494 10.1513 11.632 10.1985C11.4011 10.8366 10.9715 11.286 10.3508 11.5666ZM9.49417 10.5089C10.0578 10.5039 10.5097 10.047 10.5072 9.48341C10.5047 8.92226 10.0503 8.46789 9.48672 8.4654C8.92061 8.46292 8.4563 8.9322 8.46623 9.49831C8.47368 10.0619 8.93303 10.5138 9.49417 10.5089Z" fill="#456FA6" /></svg >',
   1: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8.80989" cy="8.80989" r="1.46833" fill="#2C98F0" /><path d="M16.8858 9.57909V8.80996C16.8858 8.59759 16.7136 8.4254 16.5012 8.4254H12.0049C13.9181 7.08751 14.3845 4.452 13.0466 2.53879C12.255 1.40683 10.9603 0.733027 9.57909 0.734132H8.80996C8.59759 0.734132 8.4254 0.90632 8.4254 1.1187V5.61501C7.0875 3.70181 4.452 3.23543 2.53879 4.57333C1.40683 5.3649 0.733027 6.65958 0.734132 8.04084V8.80996C0.734132 9.02234 0.90632 9.19453 1.1187 9.19453H5.61501C4.48704 9.98663 3.81415 11.2773 3.81064 12.6556C3.81338 14.9907 5.70572 16.8831 8.04084 16.8858H8.80996C9.02234 16.8858 9.19453 16.7136 9.19453 16.5012V12.0049C10.5324 13.9181 13.1679 14.3845 15.0811 13.0466C16.2131 12.2551 16.8869 10.9604 16.8858 9.57909ZM9.19453 1.50326H9.57909C11.4906 1.5059 13.038 3.05766 13.0354 4.96914C13.0333 6.46749 12.0673 7.79433 10.642 8.25658C10.44 7.58109 9.88453 7.07034 9.19453 6.9256V1.50326ZM1.50326 8.4254V8.04084C1.50677 6.12937 3.0592 4.58265 4.97072 4.58616C6.46802 4.5889 7.79376 5.5542 8.25619 6.97829C7.58095 7.18033 7.07039 7.73564 6.9256 8.4254H1.50326ZM8.4254 16.1167H8.04084C6.12936 16.114 4.58193 14.5623 4.58457 12.6508C4.58664 11.1524 5.55262 9.8256 6.9779 9.36335C7.1799 10.0388 7.7354 10.5496 8.4254 10.6943V16.1167ZM8.80996 9.96366C8.17279 9.96366 7.65627 9.44714 7.65627 8.80996C7.65627 8.17279 8.17279 7.65627 8.80996 7.65627C9.44714 7.65627 9.96365 8.17279 9.96365 8.80996C9.96365 9.44714 9.44709 9.96366 8.80996 9.96366ZM12.6492 13.0338C11.1519 13.031 9.82617 12.0657 9.36374 10.6416C10.039 10.4396 10.5495 9.88429 10.6943 9.19453H16.1167V9.57909C16.1131 11.4906 14.5607 13.0373 12.6492 13.0338Z" fill="white" /></svg >',
   2: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8.80989" cy="8.80989" r="1.46833" fill="#2C98F0" /><path d="M8.80996 8.44295C8.80996 7.91268 8.70552 7.38761 8.5026 6.8977C8.29967 6.4078 8.00224 5.96266 7.62729 5.58771C7.25233 5.21275 6.80719 4.91532 6.31729 4.7124C5.82739 4.50947 5.30231 4.40503 4.77205 4.40503C4.24178 4.40503 3.71671 4.50947 3.2268 4.7124C2.7369 4.91532 2.29176 5.21275 1.91681 5.58771C1.54185 5.96266 1.24442 6.4078 1.0415 6.8977C0.838575 7.38761 0.734131 7.91268 0.734131 8.44295L4.77205 8.44295H8.80996Z" fill="#2C98F0"/><path d="M16.8858 9.57909V8.80996C16.8858 8.59759 16.7136 8.4254 16.5012 8.4254H12.0049C13.9181 7.08751 14.3845 4.452 13.0466 2.53879C12.255 1.40683 10.9603 0.733027 9.57909 0.734132H8.80996C8.59759 0.734132 8.4254 0.90632 8.4254 1.1187V5.61501C7.0875 3.70181 4.452 3.23543 2.53879 4.57333C1.40683 5.3649 0.733027 6.65958 0.734132 8.04084V8.80996C0.734132 9.02234 0.90632 9.19453 1.1187 9.19453H5.61501C4.48704 9.98663 3.81415 11.2773 3.81064 12.6556C3.81338 14.9907 5.70572 16.8831 8.04084 16.8858H8.80996C9.02234 16.8858 9.19453 16.7136 9.19453 16.5012V12.0049C10.5324 13.9181 13.1679 14.3845 15.0811 13.0466C16.2131 12.2551 16.8869 10.9604 16.8858 9.57909ZM9.19453 1.50326H9.57909C11.4906 1.5059 13.038 3.05766 13.0354 4.96914C13.0333 6.46749 12.0673 7.79433 10.642 8.25658C10.44 7.58109 9.88453 7.07034 9.19453 6.9256V1.50326ZM1.50326 8.4254V8.04084C1.50677 6.12937 3.0592 4.58265 4.97072 4.58616C6.46802 4.5889 7.79376 5.5542 8.25619 6.97829C7.58095 7.18033 7.07039 7.73564 6.9256 8.4254H1.50326ZM8.4254 16.1167H8.04084C6.12936 16.114 4.58193 14.5623 4.58457 12.6508C4.58664 11.1524 5.55262 9.8256 6.9779 9.36335C7.1799 10.0388 7.7354 10.5496 8.4254 10.6943V16.1167ZM8.80996 9.96366C8.17279 9.96366 7.65627 9.44714 7.65627 8.80996C7.65627 8.17279 8.17279 7.65627 8.80996 7.65627C9.44714 7.65627 9.96365 8.17279 9.96365 8.80996C9.96365 9.44714 9.44709 9.96366 8.80996 9.96366ZM12.6492 13.0338C11.1519 13.031 9.82617 12.0657 9.36374 10.6416C10.039 10.4396 10.5495 9.88429 10.6943 9.19453H16.1167V9.57909C16.1131 11.4906 14.5607 13.0373 12.6492 13.0338Z" fill="white"/></svg >',
   3: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8.80989" cy="8.80989" r="1.46833" fill="#2C98F0" /><path d="M8.80996 8.44295C8.80996 7.91268 8.70552 7.38761 8.5026 6.8977C8.29967 6.4078 8.00224 5.96266 7.62729 5.58771C7.25233 5.21275 6.80719 4.91532 6.31729 4.7124C5.82739 4.50947 5.30231 4.40503 4.77205 4.40503C4.24178 4.40503 3.71671 4.50947 3.2268 4.7124C2.7369 4.91532 2.29176 5.21275 1.91681 5.58771C1.54185 5.96266 1.24442 6.4078 1.0415 6.8977C0.838575 7.38761 0.734131 7.91268 0.734131 8.44295L4.77205 8.44295H8.80996Z" fill="#2C98F0"/><path d="M9.17708 8.80996C9.70734 8.80996 10.2324 8.70552 10.7223 8.5026C11.2122 8.29967 11.6574 8.00224 12.0323 7.62729C12.4073 7.25233 12.7047 6.80719 12.9076 6.31729C13.1105 5.82739 13.215 5.30231 13.215 4.77205C13.215 4.24178 13.1105 3.71671 12.9076 3.2268C12.7047 2.7369 12.4073 2.29176 12.0323 1.91681C11.6574 1.54185 11.2122 1.24442 10.7223 1.0415C10.2324 0.838575 9.70734 0.734131 9.17708 0.734131L9.17708 4.77205L9.17708 8.80996Z" fill="#2C98F0"/><path d="M16.8858 9.57909V8.80996C16.8858 8.59759 16.7136 8.4254 16.5012 8.4254H12.0049C13.9181 7.08751 14.3845 4.452 13.0466 2.53879C12.255 1.40683 10.9603 0.733027 9.57909 0.734132H8.80996C8.59759 0.734132 8.4254 0.90632 8.4254 1.1187V5.61501C7.0875 3.70181 4.452 3.23543 2.53879 4.57333C1.40683 5.3649 0.733027 6.65958 0.734132 8.04084V8.80996C0.734132 9.02234 0.90632 9.19453 1.1187 9.19453H5.61501C4.48704 9.98663 3.81415 11.2773 3.81064 12.6556C3.81338 14.9907 5.70572 16.8831 8.04084 16.8858H8.80996C9.02234 16.8858 9.19453 16.7136 9.19453 16.5012V12.0049C10.5324 13.9181 13.1679 14.3845 15.0811 13.0466C16.2131 12.2551 16.8869 10.9604 16.8858 9.57909ZM9.19453 1.50326H9.57909C11.4906 1.5059 13.038 3.05766 13.0354 4.96914C13.0333 6.46749 12.0673 7.79433 10.642 8.25658C10.44 7.58109 9.88453 7.07034 9.19453 6.9256V1.50326ZM1.50326 8.4254V8.04084C1.50677 6.12937 3.0592 4.58265 4.97072 4.58616C6.46802 4.5889 7.79376 5.5542 8.25619 6.97829C7.58095 7.18033 7.07039 7.73564 6.9256 8.4254H1.50326ZM8.4254 16.1167H8.04084C6.12936 16.114 4.58193 14.5623 4.58457 12.6508C4.58664 11.1524 5.55262 9.8256 6.9779 9.36335C7.1799 10.0388 7.7354 10.5496 8.4254 10.6943V16.1167ZM8.80996 9.96366C8.17279 9.96366 7.65627 9.44714 7.65627 8.80996C7.65627 8.17279 8.17279 7.65627 8.80996 7.65627C9.44714 7.65627 9.96365 8.17279 9.96365 8.80996C9.96365 9.44714 9.44709 9.96366 8.80996 9.96366ZM12.6492 13.0338C11.1519 13.031 9.82617 12.0657 9.36374 10.6416C10.039 10.4396 10.5495 9.88429 10.6943 9.19453H16.1167V9.57909C16.1131 11.4906 14.5607 13.0373 12.6492 13.0338Z" fill="white"/></svg >',
   4: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8.80989" cy="8.80989" r="1.46833" fill="#2C98F0" /><path d="M8.80996 8.44295C8.80996 7.91268 8.70552 7.38761 8.5026 6.8977C8.29967 6.4078 8.00224 5.96266 7.62729 5.58771C7.25233 5.21275 6.80719 4.91532 6.31729 4.7124C5.82739 4.50947 5.30231 4.40503 4.77205 4.40503C4.24178 4.40503 3.71671 4.50947 3.2268 4.7124C2.7369 4.91532 2.29176 5.21275 1.91681 5.58771C1.54185 5.96266 1.24442 6.4078 1.0415 6.8977C0.838575 7.38761 0.734131 7.91268 0.734131 8.44295L4.77205 8.44295H8.80996Z" fill="#2C98F0"/><path d="M9.17708 8.80996C9.70734 8.80996 10.2324 8.70552 10.7223 8.5026C11.2122 8.29967 11.6574 8.00224 12.0323 7.62729C12.4073 7.25233 12.7047 6.80719 12.9076 6.31729C13.1105 5.82739 13.215 5.30231 13.215 4.77205C13.215 4.24178 13.1105 3.71671 12.9076 3.2268C12.7047 2.7369 12.4073 2.29176 12.0323 1.91681C11.6574 1.54185 11.2122 1.24442 10.7223 1.0415C10.2324 0.838575 9.70734 0.734131 9.17708 0.734131L9.17708 4.77205L9.17708 8.80996Z" fill="#2C98F0"/><path d="M8.80991 9.17708C8.80991 9.70734 8.91435 10.2324 9.11728 10.7223C9.3202 11.2122 9.61763 11.6574 9.99259 12.0323C10.3675 12.4073 10.8127 12.7047 11.3026 12.9076C11.7925 13.1105 12.3176 13.215 12.8478 13.215C13.3781 13.215 13.9032 13.1105 14.3931 12.9076C14.883 12.7047 15.3281 12.4073 15.7031 12.0323C16.078 11.6574 16.3754 11.2122 16.5784 10.7223C16.7813 10.2324 16.8857 9.70734 16.8857 9.17708L12.8478 9.17708L8.80991 9.17708Z" fill="#2C98F0"/><path d="M16.8858 9.57909V8.80996C16.8858 8.59759 16.7136 8.4254 16.5012 8.4254H12.0049C13.9181 7.08751 14.3845 4.452 13.0466 2.53879C12.255 1.40683 10.9603 0.733027 9.57909 0.734132H8.80996C8.59759 0.734132 8.4254 0.90632 8.4254 1.1187V5.61501C7.0875 3.70181 4.452 3.23543 2.53879 4.57333C1.40683 5.3649 0.733027 6.65958 0.734132 8.04084V8.80996C0.734132 9.02234 0.90632 9.19453 1.1187 9.19453H5.61501C4.48704 9.98663 3.81415 11.2773 3.81064 12.6556C3.81338 14.9907 5.70572 16.8831 8.04084 16.8858H8.80996C9.02234 16.8858 9.19453 16.7136 9.19453 16.5012V12.0049C10.5324 13.9181 13.1679 14.3845 15.0811 13.0466C16.2131 12.2551 16.8869 10.9604 16.8858 9.57909ZM9.19453 1.50326H9.57909C11.4906 1.5059 13.038 3.05766 13.0354 4.96914C13.0333 6.46749 12.0673 7.79433 10.642 8.25658C10.44 7.58109 9.88453 7.07034 9.19453 6.9256V1.50326ZM1.50326 8.4254V8.04084C1.50677 6.12937 3.0592 4.58265 4.97072 4.58616C6.46802 4.5889 7.79376 5.5542 8.25619 6.97829C7.58095 7.18033 7.07039 7.73564 6.9256 8.4254H1.50326ZM8.4254 16.1167H8.04084C6.12936 16.114 4.58193 14.5623 4.58457 12.6508C4.58664 11.1524 5.55262 9.8256 6.9779 9.36335C7.1799 10.0388 7.7354 10.5496 8.4254 10.6943V16.1167ZM8.80996 9.96366C8.17279 9.96366 7.65627 9.44714 7.65627 8.80996C7.65627 8.17279 8.17279 7.65627 8.80996 7.65627C9.44714 7.65627 9.96365 8.17279 9.96365 8.80996C9.96365 9.44714 9.44709 9.96366 8.80996 9.96366ZM12.6492 13.0338C11.1519 13.031 9.82617 12.0657 9.36374 10.6416C10.039 10.4396 10.5495 9.88429 10.6943 9.19453H16.1167V9.57909C16.1131 11.4906 14.5607 13.0373 12.6492 13.0338Z" fill="white"/></svg >',
   5: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8.80989" cy="8.80989" r="1.46833" fill="#2C98F0" /><path d="M8.80996 8.44295C8.80996 7.91268 8.70552 7.38761 8.5026 6.8977C8.29967 6.4078 8.00224 5.96266 7.62729 5.58771C7.25233 5.21275 6.80719 4.91532 6.31729 4.7124C5.82739 4.50947 5.30231 4.40503 4.77205 4.40503C4.24178 4.40503 3.71671 4.50947 3.2268 4.7124C2.7369 4.91532 2.29176 5.21275 1.91681 5.58771C1.54185 5.96266 1.24442 6.4078 1.0415 6.8977C0.838575 7.38761 0.734131 7.91268 0.734131 8.44295L4.77205 8.44295H8.80996Z" fill="#2C98F0"/><path d="M9.17708 8.80996C9.70734 8.80996 10.2324 8.70552 10.7223 8.5026C11.2122 8.29967 11.6574 8.00224 12.0323 7.62729C12.4073 7.25233 12.7047 6.80719 12.9076 6.31729C13.1105 5.82739 13.215 5.30231 13.215 4.77205C13.215 4.24178 13.1105 3.71671 12.9076 3.2268C12.7047 2.7369 12.4073 2.29176 12.0323 1.91681C11.6574 1.54185 11.2122 1.24442 10.7223 1.0415C10.2324 0.838575 9.70734 0.734131 9.17708 0.734131L9.17708 4.77205L9.17708 8.80996Z" fill="#2C98F0"/><path d="M8.80991 9.17708C8.80991 9.70734 8.91435 10.2324 9.11728 10.7223C9.3202 11.2122 9.61763 11.6574 9.99259 12.0323C10.3675 12.4073 10.8127 12.7047 11.3026 12.9076C11.7925 13.1105 12.3176 13.215 12.8478 13.215C13.3781 13.215 13.9032 13.1105 14.3931 12.9076C14.883 12.7047 15.3281 12.4073 15.7031 12.0323C16.078 11.6574 16.3754 11.2122 16.5784 10.7223C16.7813 10.2324 16.8857 9.70734 16.8857 9.17708L12.8478 9.17708L8.80991 9.17708Z" fill="#2C98F0"/><path d="M8.44304 8.80991C7.91277 8.80991 7.3877 8.91435 6.8978 9.11728C6.40789 9.3202 5.96276 9.61763 5.5878 9.99259C5.21285 10.3675 4.91542 10.8127 4.71249 11.3026C4.50957 11.7925 4.40512 12.3176 4.40512 12.8478C4.40512 13.3781 4.50957 13.9032 4.71249 14.3931C4.91542 14.883 5.21285 15.3281 5.5878 15.7031C5.96276 16.078 6.40789 16.3754 6.8978 16.5784C7.3877 16.7813 7.91277 16.8857 8.44304 16.8857L8.44304 12.8478L8.44304 8.80991Z" fill="#2C98F0"/><path d="M16.8858 9.57909V8.80996C16.8858 8.59759 16.7136 8.4254 16.5012 8.4254H12.0049C13.9181 7.08751 14.3845 4.452 13.0466 2.53879C12.255 1.40683 10.9603 0.733027 9.57909 0.734132H8.80996C8.59759 0.734132 8.4254 0.90632 8.4254 1.1187V5.61501C7.0875 3.70181 4.452 3.23543 2.53879 4.57333C1.40683 5.3649 0.733027 6.65958 0.734132 8.04084V8.80996C0.734132 9.02234 0.90632 9.19453 1.1187 9.19453H5.61501C4.48704 9.98663 3.81415 11.2773 3.81064 12.6556C3.81338 14.9907 5.70572 16.8831 8.04084 16.8858H8.80996C9.02234 16.8858 9.19453 16.7136 9.19453 16.5012V12.0049C10.5324 13.9181 13.1679 14.3845 15.0811 13.0466C16.2131 12.2551 16.8869 10.9604 16.8858 9.57909ZM9.19453 1.50326H9.57909C11.4906 1.5059 13.038 3.05766 13.0354 4.96914C13.0333 6.46749 12.0673 7.79433 10.642 8.25658C10.44 7.58109 9.88453 7.07034 9.19453 6.9256V1.50326ZM1.50326 8.4254V8.04084C1.50677 6.12937 3.0592 4.58265 4.97072 4.58616C6.46802 4.5889 7.79376 5.5542 8.25619 6.97829C7.58095 7.18033 7.07039 7.73564 6.9256 8.4254H1.50326ZM8.4254 16.1167H8.04084C6.12936 16.114 4.58193 14.5623 4.58457 12.6508C4.58664 11.1524 5.55262 9.8256 6.9779 9.36335C7.1799 10.0388 7.7354 10.5496 8.4254 10.6943V16.1167ZM8.80996 9.96366C8.17279 9.96366 7.65627 9.44714 7.65627 8.80996C7.65627 8.17279 8.17279 7.65627 8.80996 7.65627C9.44714 7.65627 9.96365 8.17279 9.96365 8.80996C9.96365 9.44714 9.44709 9.96366 8.80996 9.96366ZM12.6492 13.0338C11.1519 13.031 9.82617 12.0657 9.36374 10.6416C10.039 10.4396 10.5495 9.88429 10.6943 9.19453H16.1167V9.57909C16.1131 11.4906 14.5607 13.0373 12.6492 13.0338Z" fill="white"/></svg >',
}
function FanSetMainDisplay(Socket, Fan) {
   let CurrentFanSpeed = Socket.update.fan_speed
   let TargetFanSpeed = CurrentFanSpeed < 5 ? CurrentFanSpeed + 1 : 0
   Fan.innerHTML = FanIconsArray[TargetFanSpeed]
   if (CurrentSocket != null) {
      Socket.Socket.send(
         JSON.stringify({
            fan_speed: TargetFanSpeed,
         })
      )
   }
}
function HeatingRegulate() {
   let Heating = null
   if (CurrentSocket.type === "esp32_panel_4inch") {
      if (!CurrentSocket.active_channel) Heating = CurrentSocket.update_1ch.heating === "heat" ? 1 : 0
      else Heating = CurrentSocket.update_2ch.heating === "heat" ? 1 : 0
   } else Heating = CurrentSocket.update.heating === "heat" ? 1 : 0
   HeatingTermostat.style.background = Heating === 0 ? "#1F3C62" : "#035CD0"
   HeatingTermostat.onclick = function () {
      let Heating = null
      if (CurrentSocket.type === "esp32_panel_4inch") {
         if (!CurrentSocket.active_channel) Heating = CurrentSocket.update_1ch.heating === "heat" ? 0 : 1
         else Heating = CurrentSocket.update_2ch.heating === "heat" ? 0 : 1
      } else Heating = CurrentSocket.update.heating === "heat" ? 0 : 1
      this.style.background = Heating === 0 ? "#1F3C62" : "#035CD0"
      if (CurrentSocket.type === "esp32_panel_4inch") {
         if (!CurrentSocket.active_channel)
            CurrentSocket.Socket.send(JSON.stringify({ update_1ch: { heating: Heating } }))
         else CurrentSocket.Socket.send(JSON.stringify({ update_2ch: { heating: Heating } }))
      } else CurrentSocket.Socket.send(JSON.stringify({ heating: Heating }))
   }
}
function ShowWifiList(WifiList) {
   let WifiSettingPanel = document.getElementById("WifiSettingPanel")
   let WifiPasswordPanel = document.getElementById("WifiPasswordPanel")
   var WifiListPlace = document.getElementsByClassName("WifiSelecting")[0]
   let SelectChannel = document.getElementById("SelectChannel")
   document.querySelectorAll(".WifiBlock").forEach((e) => e.remove())
   var WifiName
   var GuardTypeWifi
   var WifiIcon
   var InfoWifiBlock
   var WifiBlock
   for (var k = 0; WifiList.length > k; k++) {
      WifiName = document.createElement("div")
      GuardTypeWifi = document.createElement("div")
      WifiIcon = document.createElement("div")
      InfoWifiBlock = document.createElement("div")
      WifiBlock = document.createElement("div")

      WifiName.className = "WifiName"
      GuardTypeWifi.className = "GuardTypeWifi"
      WifiIcon.className = "WifiIcon"
      InfoWifiBlock.className = "InfoWifiBlock"
      WifiBlock.className = "WifiPasswordPanel WifiBlock SelectingBlock"
      WifiName.innerHTML = WifiList[k].ssid
      if (ArraySocket[0].type === "esp32_panel_4inch")
         GuardTypeWifi.innerHTML = WifiDefCollectionPanel[WifiList[k].encryption]
      else GuardTypeWifi.innerHTML = WifiDefCollection[WifiList[k].encryption]
      if (WifiList[k].signal != undefined) WifiIcon.innerHTML = WifiIconArray[DetermineWifiSignal(WifiList[k].signal)]
      InfoWifiBlock.append(WifiName)
      InfoWifiBlock.append(GuardTypeWifi)
      WifiBlock.append(InfoWifiBlock)
      WifiBlock.append(WifiIcon)
      WifiListPlace.append(WifiBlock)
      WifiBlock.onclick = function () {
         WifiSelected = this
         let SelectedWifiName = this.querySelectorAll(".WifiName")[0].innerHTML
         if (this.querySelectorAll(".GuardTypeWifi")[0].innerHTML != "Открытая сеть") {
            if (FirstConfigurate) {
               if (PanelMenu) {
                  SwitchElem(WifiSettingPanel, WifiPasswordPanel)
               } else SwitchElem(OneStageSettingDissapearElem, TwoStageSettingDissapearElem)
               WifiConnectBtn.onclick = function () {
                  let passwordCheck = document.getElementById("PasswordFirstSetting")
                  if (passwordCheck.value.length > 0) {
                     if (PanelMenu) {
                        SwitchElem(WifiPasswordPanel, SelectChannel)
                        DetermineChannle()
                     } else SwitchElem(TwoStageSettingDissapearElem, ThreeStageSettingDissapearElem)
                     WifiPassword = passwordCheck.value
                     configTermostat.config.wifi_pass = WifiPassword
                     configConditioner.config.wifi_pass = WifiPassword
                     configPanel.config.wifi_pass = WifiPassword
                  }
               }
            } else {
               let WifiSelectingList = document.getElementsByClassName("WifiSelecting")[0]
               let WifiMenuBlock = document.getElementsByClassName("WifiMenuBlock")[0]
               let ConnecthWifiMainMenu = document.getElementById("ConnecthWifiMainMenu")
               let RefreshWifiList = document.getElementById("RefreshWifiList")
               SwitchElem(WifiSelectingList, WifiMenuBlock)
               SwitchElem(RefreshWifiList, ConnecthWifiMainMenu)
               ConnecthWifiMainMenu.onclick = function () {
                  let passwordCheck = document.getElementById("PasswordFirstSetting")
                  if (passwordCheck.value.length > 0) {
                     CurrentSocket.Socket.send(
                        JSON.stringify({
                           wifi_connect: {
                              ssid: SelectedWifiName,
                              password: passwordCheck.value,
                           },
                        })
                     )
                  }
               }
            }
            configTermostat.config.wifi_name = this.querySelectorAll(".WifiName")[0].innerHTML
            configConditioner.config.wifi_name = this.querySelectorAll(".WifiName")[0].innerHTML
            configPanel.config.wifi_name = this.querySelectorAll(".WifiName")[0].innerHTML
         } else {
            SwitchElem(OneStageSettingDissapearElem, ThreeStageSettingDissapearElem)
            WifiSelected = this
            config.config.wifi_name = SelectedWifiName
         }
      }
   }
}
function DetermineWifiSignal(WifiSignal) {
   let result
   if (WifiSignal != -1) {
      if (WifiSignal > 100) {
         result = 3
      } else {
         let determineResult = Math.floor(WifiSignal / 25)
         result = determineResult === 4 ? 3 : determineResult
      }
   } else result = 4
   return result
}
WifiRefreshBtn.onclick = sendRefreshWifi
function sendRefreshWifi() {
   ArraySocket[0].Socket.send(
      JSON.stringify({
         wifi_refresh: 1,
      })
   )
}
function NavigationDevice() {
   BackToSettings.forEach((item) => (item.onclick = NavSettings))
   SettingItems.forEach((item) => (item.id === "DeviceName" ? false : (item.onclick = NavItem)))
   ResetSettings.onclick = function () {
      document.getElementById("DropUpMain").style.display = "flex"
   }
   SettingIcon.forEach(
      (item) =>
         (item.onclick = function () {
            if (
               CurrentSocket.type === "esp8266_thermostat" ||
               CurrentSocket.type === "esp8266_thermostat_plus" ||
               CurrentSocket.type === "esp32_panel_4inch"
            ) {
               SwitchElem(MainDisplayTermostat, DeviceSettings)
               DeviceSettings.querySelector("#ConditionerSetting").style.display = "none"
               if (CurrentSocket.type === "esp32_panel_4inch") {
                  DeviceSettings.querySelector("#InnerSensorSetting").style.display = "none"
                  DeviceSettings.querySelector("#ZigBeeSetting").style.display = "flex"
                  DeviceSettings.querySelector("#SensorTempPageSetting").style.display = "flex"
               } else {
                  DeviceSettings.querySelector("#SensorTempPageSetting").style.display = "none"
                  DeviceSettings.querySelector("#ZigBeeSetting").style.display = "none"
                  DeviceSettings.querySelector("#InnerSensorSetting").style.display = "flex"
               }
               DeviceSettings.querySelector("#GisteresisSetting").style.display = "flex"
               DeviceSettings.querySelector("#TypeSensorSetting").style.display = "flex"
            } else {
               SwitchElem(MainDisplayConditioner, DeviceSettings)
               DeviceSettings.querySelector("#ZigBeeSetting").style.display = "none"
               DeviceSettings.querySelector("#InnerSensorSetting").style.display = "none"
               DeviceSettings.querySelector("#GisteresisSetting").style.display = "none"
               DeviceSettings.querySelector("#TypeSensorSetting").style.display = "none"
               DeviceSettings.querySelector("#ConditionerSetting").style.display = "flex"
               DeviceSettings.querySelector("#SensorTempPageSetting").style.display = "none"
            }
            if (CurrentSocket.type === "esp8266_thermostat") {
               DeviceSettings.querySelector("#DisplaySetting").style.display = "flex"
            } else {
               DeviceSettings.querySelector("#DisplaySetting").style.display = "none"
            }
         })
   )
   BackToMainDevicePage.onclick = function () {
      if (
         CurrentSocket.type === "esp8266_thermostat" ||
         CurrentSocket.type === "esp8266_thermostat_plus" ||
         CurrentSocket.type === "esp32_panel_4inch"
      ) {
         SwitchElem(DeviceSettings, MainDisplayTermostat)
      } else {
         SwitchElem(DeviceSettings, MainDisplayConditioner)
      }
   }
   DropUpWindowClose.forEach(
      (item) =>
         (item.onclick = function () {
            this.parentElement.parentElement.parentElement.style.display = "none"
         })
   )
}
function NavSettings() {
   let ComposedStyleMqtt = getComputedStyle(MQTTReceivedInfo)
   let PasswordBlockWifimenu = document.getElementById("PasswordBlockWifimenu")
   let ComposedStyleWifi = getComputedStyle(PasswordBlockWifimenu)
   if ((this.parentElement.parentElement.id === "MQTTPage") & (ComposedStyleMqtt.display != "none")) {
      SwitchElem(MQTTReceivedInfo, MqttInputData)
      //ConnectMQTTBtn.style.display = 'flex';
      DisconnectMQTTBtn.style.display = "flex"
   } else if ((this.parentElement.parentElement.id === "WifiPage") & (ComposedStyleWifi.display != "none")) {
      let WifiSelecting = document.getElementsByClassName("WifiSelecting")[0]
      WifiSelecting.style.display = "block"
      PasswordBlockWifimenu.style.display = "none"
   } else SwitchElem(this.parentElement.parentElement, DeviceSettings)
}
function NavItem() {
   if (this.className === "SettingItem InDevelop") {
      TogglePopUp(InDevelop)
   } else {
      SwitchElem(DeviceSettings, document.getElementsByClassName(this.id)[0])
   }
}
function NavMainDisplay() {
   SwitchElem(this.parentElement.parentElement.parentElement, MainDisplay)
}
function TogglePopUp(PopUpToggle) {
   PopUpToggle.classList.toggle("show")

   let BodyTag = document.body
   BodyTag.classList.toggle("shadowBody")
   let TimeOutToggle = setTimeout(FadeOutPopUp, 2000)
   function FadeOutPopUp() {
      PopUpToggle.classList.toggle("show")
      BodyTag.classList.toggle("shadowBody")
   }
   PopUpToggle.onclick = function () {
      clearTimeout(TimeOutToggle)
      PopUpToggle.classList.toggle("show")
      BodyTag.classList.toggle("shadowBody")
   }
}
function ShowInDevelop() {
   TogglePopUp(InDevelop)
}
function AliceSet() {
   let AliceLoginGroup = document.querySelectorAll(".AliceLoginGroup")
   let AliceLogOutGroup = document.querySelectorAll(".AliceLogOutGroup")
   let AliceShowIcon = document.getElementById("AliceShowIcon")
   AliceShowIcon.style.display = "none"
   if (ArraySocket[0].config != null) {
      if (ArraySocket[0].config.mqtt_alice === "0" || ArraySocket[0].config.mqtt_alice === undefined) {
         AliceLoginGroup.forEach((item) => (item.style.display = "flex"))
         AliceLogOutGroup.forEach((item) => (item.style.display = "none"))
      } else {
         let AliceAdded = document.getElementById("AliceAdded")
         AliceAdded.querySelector(".InputInfo").innerHTML = ArraySocket[0].config.alice_login
         AliceLogOutGroup.forEach((item) => (item.style.display = "block"))
         AliceLoginGroup.forEach((item) => (item.style.display = "none"))
      }
   }
   AliceLogIn.onclick = function () {
      let LoginAlice = document.getElementById("LoginAlice")
      let PasswordAlice = document.getElementById("PasswordAlice")
      if ((LoginAlice.value.length > 0) & (PasswordAlice.value.length > 0)) {
         for (let i = 0; ArraySocket.length > i; i++) {
            ArraySocket[i].Socket.send(
               JSON.stringify({
                  alice_connect: {
                     alice_login: LoginAlice.value,
                     alice_password: PasswordAlice.value,
                  },
               })
            )
         }
      }
   }
   if (ArraySocket[0].config != undefined) {
      let AliceOnlyMqtt = document.getElementById("AliceOnlyMqtt")
      if (ArraySocket[0].config.homekit === "0") {
         if (ArraySocket[0].type === "esp32_panel_4inch") {
            AliceOnlyMqtt.style.display = "none"
         } else {
            AliceOnlyMqtt.style.display = "block"
            AliceLink.onclick = null
         }
      } else {
         AliceOnlyMqtt.style.display = "none"
      }
   }
   AliceLogOut.onclick = function () {
      for (let i = 0; ArraySocket.length > i; i++) {
         ArraySocket[i].Socket.send(JSON.stringify({ alice_disconnect: 1 }))
      }
   }
   AliceInfoPopUp.onclick = function (event) {
      event.stopPropagation()
      DropUpAliceInfo.style.display = "flex"
   }
   CloseAliceInfo.onclick = function () {
      DropUpAliceInfo.style.display = "none"
   }
   RegistrationPopUp.onclick = function (event) {
      event.stopPropagation()
      DropUpRegistrationInfo.style.display = "flex"
   }
   CloseRegistrationInfo.onclick = function () {
      DropUpRegistrationInfo.style.display = "none"
   }
   AliceShowPass.onclick = function () {
      let AliceShowIcon = document.getElementById("AliceShowIcon")
      let AliceNotShowIcon = document.getElementById("AliceNotShowIcon")
      let PasswordAlice = document.getElementById("PasswordAlice")
      if (PasswordAlice.type === "password") {
         PasswordAlice.type = "text"
         AliceNotShowIcon.style.display = "none"
         AliceShowIcon.style.display = "block"
      } else {
         PasswordAlice.type = "password"
         AliceNotShowIcon.style.display = "block"
         AliceShowIcon.style.display = "none"
      }
   }
}
BlocksInfo.forEach(
   (item) =>
      (item.onclick = function () {
         CopyBy(this.getElementsByClassName("BlockInformation")[0])
         let BlockTouggle = document.getElementById("CopyMqttString")
         TogglePopUp(BlockTouggle)
      })
)
function CopyBy(item) {
   var copyText = item.innerText
   let CreateElemTextArea = document.createElement("textarea")
   CreateElemTextArea.innerText = copyText
   document.body.append(CreateElemTextArea)
   CreateElemTextArea.select()
   document.execCommand("copy")
   document.body.removeChild(CreateElemTextArea)
}

function showModelMenu() {
   console.log(CurrentSocket.type)
   if (configConditioner.config.air_brand != null && configConditioner.config.air_brand != "") {
      document.querySelector(".ConditionerModelScrollingMenu").innerHTML = ""
      document.querySelector(".ModelSetting").style.display = "block"
      document.querySelector(".MenuBody").style.display = "none"
      conditionerModels[configConditioner.config.air_brand].forEach((model) => {
         document
            .querySelector(".ConditionerModelScrollingMenu")
            .insertAdjacentHTML(
               "beforeend",
               `<div class="SelectingBlock ConditionerModel" data-model="${model}"><span>${model}</span></div>`
            )
      })
      document.querySelectorAll(".ConditionerModel").forEach((modelBlock) => {
         modelBlock.onclick = (event) => {
            configConditioner.config.air_model = event.currentTarget.dataset.model
            console.log(configConditioner.config)
            document.querySelectorAll(".ConditionerModel > .ConditionerSelectedIcon").forEach((icon) => {
               icon.remove()
            })
            event.currentTarget.insertAdjacentHTML(
               "beforeend",
               `<div class="SelectedIcon ConditionerSelectedIcon" style="display: block;">
            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8.13808L6.84888 15L20 1.86194L18.1119 0L6.84888 11.2499L1.86191 6.26303L0 8.13808Z" fill="#2C98F0"></path>
            </svg>
            </div>`
            )
         }
      })
   }
}
document.querySelector(".HideModelSettingMenu").onclick = () => {
   document.querySelector(".ModelSetting").style.display = "none"
   document.querySelector(".MenuBody").style.display = "block"
}
function SetLoader_2(time, func) {
   let Loader = document.getElementsByClassName("LoaderHandler_2")[0]
   Loader.style.display = "block"
   let TimeLoader = time
   let TimerId = setInterval(function () {
      TimeLoader = TimeLoader - 1
      if (time < 500) Loader.children[1].innerHTML = TimeLoader + " сек"
   }, 1000)
   if (func != null) {
      setTimeout(function () {
         Loader.style.display = "none"
         TimerId = setInterval(() => {
            clearInterval(TimerId)
            func()
         }, 0)
      }, time * 1000)
   } else {
      setTimeout(function () {
         Loader.style.display = "none"
         TimerId = setInterval(() => {
            clearInterval(TimerId)
         })
      }, time * 1000)
   }
}
document.querySelector(".FinishModelSettingConditioner").onclick = () => {
   console.log("выбор модели завершен")
   console.log(configConditioner)
   document.querySelector(".ModelSetting").style.display = "none"
   document.querySelector(".MenuBody").style.display = "block"
   SwitchElem(document.querySelector("#ThreeStageSetting"), ModeWorkDevice)
   /*
   if (CurrentSocket.type === "esp8266_thermostat" || CurrentSocket.type === "esp8266_thermostat_plus")
      CurrentSocket.Socket.send(JSON.stringify(configTermostat))
   else CurrentSocket.Socket.send(JSON.stringify(configConditioner))
   SetLoader(999, null)
   */
}
BackConditioner.onclick = function () {
   SwitchElem(ModeWorkDevice, ThreeStageSettingDissapearElem)
}
