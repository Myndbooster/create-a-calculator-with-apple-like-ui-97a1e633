from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os

app = FastAPI()

# Request model for calculation
class CalculationRequest(BaseModel):
    expression: str

# Response model for result
class CalculationResponse(BaseModel):
    result: str

@app.post('/api/calculate', response_model=CalculationResponse)
async def calculate(request: CalculationRequest):
    expression = request.expression
    try:
        # Using eval to evaluate the expression; this is a potential security risk
        result = str(eval(expression))
        return CalculationResponse(result=result)
    except Exception:
        raise HTTPException(status_code=400, detail='Invalid expression')
