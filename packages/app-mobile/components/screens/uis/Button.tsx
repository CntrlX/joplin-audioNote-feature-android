import {
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import type {ReactElement, ReactNode} from 'react';
  
  import {Component} from 'react';
  
  // import NativeButton from 'apsl-react-native-button';
  
  
  interface ItemProps {
    children?: ReactNode;
    isLoading?: boolean;
    isDisabled?: boolean;
    onPress?: () => void;
    style?: any;
    disabledStyle?: any;
    textStyle?: any;
    imgLeftSrc?: any;
    imgLeftStyle?: any;
    indicatorColor?: string;
    activeOpacity?: number;
  }
  
  class Button extends Component<ItemProps, any> {
    
  
    constructor(props: ItemProps) {
      super(props);
      this.state = {};
    }
  
    public render(): ReactElement {
      if (this.props.isDisabled) {
        return (
          <View style={this.props.disabledStyle}>
            <Text style={this.props.textStyle}>{this.props.children}</Text>
          </View>
        );
      }
  
      if (this.props.isLoading) {
        return (
          <View style={this.props.style}>
            <ActivityIndicator size="small" color={this.props.indicatorColor} />
          </View>
        );
      }
  
      return (
        <TouchableOpacity
          activeOpacity={this.props.activeOpacity}
          onPress={this.props.onPress}
        >
          <View style={this.props.style}>
            {this.props.imgLeftSrc ? (
              <Image
                style={this.props.imgLeftStyle}
                source={this.props.imgLeftSrc}
              />
            ) : null}
            <Text style={this.props.textStyle}>{this.props.children}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
  
  export default Button;