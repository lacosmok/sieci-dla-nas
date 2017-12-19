import numpy as np
# Sieć neuronowa przeszkolona z wsteczną propagacją,
# próbuje wykorzystać dane wejściowe do przewidywania wyników.
# Rozważ próbę przewidywania kolumny wyników przy trzech kolumnach
# wejściowych. Możemy rozwiązać ten problem, po prostu mierząc statystyki
# między wartościami wejściowymi a wyjściowymi.
# Gdybyśmy to zrobili, zobaczylibyśmy,
# że lewa kolumna wejściowa jest idealnie skorelowana z wyjściem.
# Backpropagation, w najprostszej formie, mierzy statystyki takie jak ta,
# aby stworzyć model.

# sigmoid function
def nonlin(x, deriv=False):
    if (deriv == True):
        return x * (1 - x)
    return 1 / (1 + np.exp(-x))


def create_network(X, y, runtime):
    # y = np.array([y]).T
    y = np.array(np.asarray([y])).T
    np.random.seed(1)
    # initialize weights randomly with mean 0
    syn0 = 2 * np.random.random((3, 1)) - 1

    for iter in range(runtime):
        # forward propagation
        firstLayer = X
        secondLayer = nonlin(np.dot(firstLayer, syn0))
        # how much did we miss?
        secondLayer_error = y - secondLayer
        # multiply how much we missed by the
        # slope of the sigmoid at the values in secondLayer
        secondLayer_delta = secondLayer_error * nonlin(secondLayer, True)
        # update weights
        syn0 += np.dot(np.asarray(firstLayer).T, secondLayer_delta)
    return secondLayer


def matrix_to_string(matrix):
    result = ''
    for row in matrix:
        for number in row:
            result += str(number) + " "
        result += "|"
    return result


def line_to_string(row):
    result = ''
    for number in row:
        result += str(number) + " "
    return result

