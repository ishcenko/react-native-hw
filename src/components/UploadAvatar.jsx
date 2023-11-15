import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const UploadAvatar = ({ image, selectAvatar, hundleClearAvatar }) => {
  return (
    <>
      <View style={styles.box}>
        {image ? (
          <ImageBackground
            source={{ uri: image }}
            style={styles.fotoBoxWithImage}
          />
        ) : null}
        {image ? (
          <TouchableOpacity
            style={styles.addBtnWithImage}
            onPress={hundleClearAvatar}
          >
            <AntDesign
              name="closecircleo"
              style={styles.addSvgWithImage}
              size={25}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.fotoBox}>
        <TouchableOpacity style={styles.addBtn} onPress={selectAvatar}>
          <AntDesign name="pluscircleo" style={styles.addSvg} size={25} />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fotoBox: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 16,
    marginTop: -60,
  },
  fotoBoxWithImage: {
    width: 120,
    height: 120,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -60,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 16,
    overflow: "hidden",
  },
  box: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },
  addBtn: {
    width: 25,
    height: 25,
    borderRadius: 100,
    marginLeft: "auto",
    marginTop: "auto",
    backgroundColor: "#FFFFFF",
    marginBottom: 14,
    marginRight: -13,
  },
  addSvg: {
    color: "#FF6C00",
  },
  addSvgWithImage: {
    color: "#BDBDBD",
  },
  addBtnWithImage: {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    bottom: 14,
    right: -13,
  },
});
