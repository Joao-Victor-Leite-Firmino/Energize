import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
  Home: undefined;
  AddRecord: undefined;
  ListRecords: undefined;
  EditRecord: { id: number };
};

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
