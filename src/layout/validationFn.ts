import  securityValues  from './constants';
import { isInteger } from 'formik';

const validate = (
    values: typeof securityValues,
): Record<keyof typeof securityValues, string> => {
    const errors = {} as Record<keyof typeof securityValues, string>;

    Object.keys(values).forEach(() => {

        if ( parseInt(values.searchPrioritet)  > 0 && isInteger(values.searchPrioritet)) {
            errors.searchPrioritet = 'Целое число, больше нуля';
        }

        if ( parseInt(values.countObjectInPlane)  > 0 && isInteger(values.countObjectInPlane)) {
            errors.countObjectInPlane = 'Целое число, больше нуля';
        }

        if ( parseInt(values.countObject)  > 0 && isInteger(values.countObject)) {
            errors.countObject = 'Целое число, больше нуля';
        }

        if ( parseFloat(values.inclinedOrbits)  > 0
            && parseFloat(values.inclinedOrbits)  < 180 ) {
            errors.countObject = 'Введите значение от 0 до 180';
        }

        if ( parseFloat(values.argumentPersentra)  > 0
            && parseFloat(values.argumentPersentra)  < 360 ) {
            errors.argumentPersentra = 'Введите значение от 0 до 360';
        }

        if ( parseFloat(values.bigSquare)  > 6480
            && parseFloat(values.bigSquare)  < 40000 ) {
            errors.bigSquare = 'Введите значение от 6480 до 40000 км';
        }

        if ( parseFloat(values.ekssentriset)  > 0.0
            && parseFloat(values.ekssentriset)  < 1.0) {
            errors.ekssentriset = 'Введите значение от 0,0 до 1,0';
        }

        if ( parseFloat(values.longitudeAngle)  > 0
            && parseFloat(values.longitudeAngle)  < 180 ) {
            errors.countObject = 'Введите значение от 0 до 180';
        }

        if ( parseFloat(values.trueAnamolia)  > 0
            && parseFloat(values.trueAnamolia)  < 180 ) {
            errors.trueAnamolia = 'Введите значение от 0 до 180';
        }

        if ( parseFloat(values.degreeOfBlackness)  > 0
            && parseFloat(values.degreeOfBlackness)  < 1 ) {
            errors.degreeOfBlackness = 'Введите значение от 0 до 1';
        }

        if ( parseFloat(values.linearDimensions)  > 0
            && parseFloat(values.linearDimensions)  < 1 ) {
            errors.linearDimensions = '';
        }

        if ( parseFloat(values.weight)  > 0 ) {
            errors.weight = 'Введите положительное значение ';
        }

        if ( parseFloat(values.resistanceCoefficient)  > 0
            && parseFloat(values.linearDimensions)  < 2 ) {
            errors.weight = 'Введите значение от 0 до 2 ';
        }

    });

    return errors;
};

export default validate;
