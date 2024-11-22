import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AddRecord: undefined;
  ListRecords: undefined;
  EditRecord: { id: number };
  Login: undefined;
  Register: undefined; // Nova tela de registro
};


export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
