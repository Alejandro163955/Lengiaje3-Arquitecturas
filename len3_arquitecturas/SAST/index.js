// Ejemplo de arquitectura de prueba unitaria para el Use Case Hexagonal
describe('CreateTaskUseCase', () => {
    test('Debería retornar un Result exitoso al crear tarea', () => {
        // 1. Arrange (Preparar)
        const mockAdapter = { save: (t) => ({...t, id: 1}) };
        const useCase = new CreateTaskUseCase(mockAdapter);

        // 2. Act (Actuar)
        const result = useCase.run("Test Unitario");

        // 3. Assert (Afirmar)
        expect(result.isSuccess).toBe(true);
        expect(result.value.title).toBe("Test Unitario");
    });
});